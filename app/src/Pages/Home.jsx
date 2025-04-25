import React from 'react';
import Slider from '../components/Slider';
import './Pages.css';

const Home = () => {
    return (
        <div className="page-container">
            <Slider />
            <section className="content-section">
                <h2>Welcome to Our Website</h2>
                <div className="features-grid">
                    <div className="feature-card">
                        <h3>Innovation</h3>
                        <p>Leading the way in innovative solutions for your business needs.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Excellence</h3>
                        <p>Committed to delivering excellence in every project we undertake.</p>
                    </div>
                    <div className="feature-card">
                        <h3>Partnership</h3>
                        <p>Building lasting partnerships with our valued clients.</p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;