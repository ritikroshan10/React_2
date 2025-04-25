import React from 'react';
import './Pages.css';

const Portfolio = () => {
    const projects = [
        {
            title: 'E-Commerce Platform',
            category: 'Web Development',
            image: '/images/slider1.jpg',
            description: 'A full-featured online shopping platform built with React and Node.js'
        },
        {
            title: 'Health & Fitness App',
            category: 'Mobile Development',
            image: '/images/slider2.jpg',
            description: 'Mobile application for tracking fitness goals and nutrition'
        },
        {
            title: 'Corporate Website',
            category: 'Web Design',
            image: '/images/slider3.jpg',
            description: 'Modern corporate website with custom CMS'
        }
    ];

    return (
        <div className="page-container">
            <section className="content-section">
                <h2>Our Portfolio</h2>
                <div className="portfolio-filters">
                    <button className="filter-btn active">All</button>
                    <button className="filter-btn">Web</button>
                    <button className="filter-btn">Mobile</button>
                    <button className="filter-btn">Design</button>
                </div>
                <div className="portfolio-grid">
                    {projects.map((project, index) => (
                        <div key={index} className="portfolio-item">
                            <div className="portfolio-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="portfolio-content">
                                <h3>{project.title}</h3>
                                <span className="category">{project.category}</span>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Portfolio;