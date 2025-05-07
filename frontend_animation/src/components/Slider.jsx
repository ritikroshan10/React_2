import React, { useState, useEffect, useRef } from 'react';
import { images } from "../assets/images";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const imageRef = useRef(null);
    const textRef = useRef(null);

    const slides = [
        { url: images.slider1, title: 'Image 1', description: 'Description for image 1' },
        { url: images.slider2, title: 'Image 2', description: 'Description for image 2' },
        { url: images.slider3, title: 'Image 3', description: 'Description for image 3' },
        { url: images.slider4, title: 'Image 4', description: 'Description for image 4' },
        { url: images.slider5, title: 'Image 5', description: 'Description for image 5' }
    ];

    const nextSlide = () => {
        setCurrentSlide(currentSlide === slides.length - 1 ? 0 : currentSlide + 1);
    };

    const prevSlide = () => {
        setCurrentSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1);
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 3000);
        return () => clearInterval(timer);
    }, [currentSlide]);

    useGSAP(() => {
        if (imageRef.current && textRef.current) {
            gsap.fromTo(imageRef.current, 
                { y: -30 , opacity: 0 },
                { y: 0 , opacity: 1, duration: 1.5, ease: "power3.out" }
            );

            gsap.fromTo(textRef.current, 
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 1, delay: 0.3, ease: "power3.out" }
            );
        }
    }, [currentSlide]);

    return (
        <div className="relative w-full max-w-[1200px] h-[500px] mx-auto overflow-hidden mt-4 sliders">
            <div className="relative h-full">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
                    >
                        {index === currentSlide && (
                            <>
                                <img
                                    ref={imageRef}
                                    src={slide.url}
                                    alt={slide.title}
                                    className="w-full h-full object-cover"
                                />
                                <div ref={textRef} className="absolute bottom-[50px] left-[50px] text-white text-shadow-md">
                                    <h2 className="text-2xl font-bold">{slide.title}</h2>
                                    <p className="text-lg">{slide.description}</p>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>

            {/* Prev/Next Buttons */}
            <button className="absolute top-1/2 left-[10px] -translate-y-1/2 bg-black/50 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center text-lg z-10 hover:bg-black" onClick={prevSlide}>&lt;</button>
            <button className="absolute top-1/2 right-[10px] -translate-y-1/2 bg-black/50 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center text-lg z-10 hover:bg-black" onClick={nextSlide}>&gt;</button>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                {slides.map((_, index) => (
                    <span
                        key={index}
                        className={`w-3 h-3 rounded-full cursor-pointer transition-colors duration-300 ${index === currentSlide ? 'bg-white' : 'bg-white/50'}`}
                        onClick={() => setCurrentSlide(index)}
                    ></span>
                ))}
            </div>
        </div>
    );
};

export default Slider;
