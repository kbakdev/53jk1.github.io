import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header style={headerStyle}>
            <nav style={navStyle}>
                <ul style={ulStyle}>
                    <li style={liStyle}><Link to="/" style={linkStyle}>Home</Link></li>
                    <li style={liStyle}><Link to="/about" style={linkStyle}>About</Link></li>
                    <li style={liStyle}><Link to="/skills" style={linkStyle}>Skills</Link></li>
                    <li style={liStyle}><Link to="/portfolio" style={linkStyle}>Portfolio</Link></li>
                </ul>
            </nav>
        </header>
    );
};

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
};

const navStyle = {
    display: 'flex',
    justifyContent: 'center'
};

const ulStyle = {
    listStyle: 'none',
    display: 'flex',
    alignItems: 'center',
    margin: 0,
    padding: 0
};

const liStyle = {
    marginLeft: '20px',
    marginRight: '20px'
};

const linkStyle = {
    color: '#fff',
    textDecoration: 'none',
    fontSize: '1.2rem'
};

export default Header;
