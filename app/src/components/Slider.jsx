import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Add your real images here
    const slides = [
        {
            url: '/images/slider1.jpg',
            title: 'Image 1',
            description: 'Description for image 1'
        },
        {
            url: '/images/slider2.jpg',
            title: 'Image 2',
            description: 'Description for image 2'
        },
        {
            url: '/images/slider3.jpg',
            title: 'Image 3',
            description: 'Description for image 3'
        }
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    // Auto-slide every 5 seconds
    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    
    return (
        <div className="slider-container">
            <div className="slider">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`slide ${index === currentSlide ? 'active' : ''}`}
                    >
                        {index === currentSlide && (
                            <>
                                <img src={slide.url} alt={slide.title} />
                                <div className="slide-content">
                                    <h2>{slide.title}</h2>
                                    <p>{slide.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            <button className="prev-button" onClick={prevSlide}>&lt;</button>
            <button className="next-button" onClick={nextSlide}>&gt;</button>
            
            <div className="dots">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;