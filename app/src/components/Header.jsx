import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="header">
            <div className="header-container">
                <div className="logo">
                    <Link to="/">Your Logo</Link>
                </div>
                
                <button className={`mobile-menu-button ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                <nav className={`nav-menu ${isMenuOpen ? 'open' : ''}`}>
                    <ul>
                        <li>
                            <Link 
                                to="/" 
                                className={location.pathname === '/' ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                Home
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/about" 
                                className={location.pathname === '/about' ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                About
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/services" 
                                className={location.pathname === '/services' ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/portfolio" 
                                className={location.pathname === '/portfolio' ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                Portfolio
                            </Link>
                        </li>
                        <li>
                            <Link 
                                to="/contact" 
                                className={location.pathname === '/contact' ? 'active' : ''}
                                onClick={closeMenu}
                            >
                                Contact
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;