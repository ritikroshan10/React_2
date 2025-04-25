import React, { useState } from 'react';
import './Pages.css';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
    };

    return (
        <div className="page-container">
            <section className="content-section">
                <h2>Contact Us</h2>
                <div className="contact-container">
                    <div className="contact-info">
                        <h3>Get in Touch</h3>
                        <div className="info-item">
                            <span className="icon">📍</span>
                            <p>123 Business Street, Suite 100<br />New York, NY 10001</p>
                        </div>
                        <div className="info-item">
                            <span className="icon">📞</span>
                            <p>+1 (555) 123-4567</p>
                        </div>
                        <div className="info-item">
                            <span className="icon">✉️</span>
                            <p>info@yourcompany.com</p>
                        </div>
                        <div className="social-links">
                            <a href="#" className="social-link">Facebook</a>
                            <a href="#" className="social-link">Twitter</a>
                            <a href="#" className="social-link">LinkedIn</a>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h3>Send us a Message</h3>
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn">Send Message</button>
                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;