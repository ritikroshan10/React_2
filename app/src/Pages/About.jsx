import React from 'react';
import './Pages.css';

const About = () => {
    return (
        <div className="page-container">
            <section className="content-section">
                <h1>About Us</h1>

                <nav className="breadcrumb">
                    <span><a href="/">Home</a></span> &gt; <span>About</span>
                </nav>

                <div className="about-content">
                    <div className="about-text">
                        <h3>Our Story</h3>
                        <p>Founded in 2020, we've been at the forefront of digital innovation, creating solutions that make a difference in people's lives.</p>
                        
                        <h3>Our Mission</h3>
                        <p>To deliver exceptional digital experiences that transform businesses and delight users.</p>
                        
                        <h3>Our Values</h3>
                        <ul>
                            <li>Innovation in everything we do</li>
                            <li>Customer satisfaction first</li>
                            <li>Excellence in delivery</li>
                            <li>Continuous improvement</li>
                        </ul>
                    </div>

                    <div className="team-grid">
                        <div className="team-member">
                            <div className="member-photo">
                                <img src="/images/member1.webp" alt="" />
                            </div>
                            <h4>John Doe</h4>
                            <p>CEO & Founder</p>
                        </div>
                        <div className="team-member">
                            <div className="member-photo">
                            <img src="/images/member2.webp" alt="" />
                            </div>
                            <h4>Jane Smith</h4>
                            <p>Creative Director</p>
                        </div>
                        <div className="team-member">
                            <div className="member-photo">
                            <img src="/images/member3.webp" alt="" />
                            </div>
                            <h4>Mike Johnson</h4>
                            <p>Technical Lead</p>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
};

export default About;