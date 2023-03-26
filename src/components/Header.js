import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/gopher01bw.svg';
import './Header.css';

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <Link to="/" className="logo-link">
                        <img src={logo} alt="Logo" className="logo-image" />
                        <span className="logo-text">Kacper Bąk</span>
                    </Link>
                </div>
                <nav className="nav">
                    <Link to="/" className="nav-link">Home</Link>
                    <Link to="/about" className="nav-link">About</Link>
                    <Link to="/skills" className="nav-link">Skills</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;
