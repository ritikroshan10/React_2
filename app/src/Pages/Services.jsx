import React from 'react';
import './Pages.css';

const Services = () => {
    return (
        <div className="page-container">
            <section className="content-section">
                <h2>Our Services</h2>
                <div className="services-grid">
                    <div className="service-card">
                        <div className="service-icon">🚀</div>
                        <h3>Web Development</h3>
                        <p>Custom websites and web applications built with modern technologies.</p>
                        <ul>
                            <li>Responsive Design</li>
                            <li>E-commerce Solutions</li>
                            <li>CMS Development</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">📱</div>
                        <h3>Mobile Apps</h3>
                        <p>Native and cross-platform mobile applications.</p>
                        <ul>
                            <li>iOS Development</li>
                            <li>Android Development</li>
                            <li>React Native Apps</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">🎨</div>
                        <h3>UI/UX Design</h3>
                        <p>Beautiful and intuitive user interfaces that engage users.</p>
                        <ul>
                            <li>User Research</li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                        </ul>
                    </div>
                    <div className="service-card">
                        <div className="service-icon">📊</div>
                        <h3>Digital Marketing</h3>
                        <p>Comprehensive digital marketing solutions.</p>
                        <ul>
                            <li>SEO Optimization</li>
                            <li>Social Media Marketing</li>
                            <li>Content Strategy</li>
                        </ul>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Services;