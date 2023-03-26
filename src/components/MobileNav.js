import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons';

const hamburgerStyle = {
    fontSize: '2rem',
    cursor: 'pointer',
    '@media (max-width: 768px)': {
        display: 'block'
    }
}

const mobileNavStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    zIndex: '1'
};

const closeButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '20px',
    fontSize: '2rem',
    cursor: 'pointer',
}

const MobileNav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const handleCloseMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <div>
            <FontAwesomeIcon
                icon={faBars}
                style={hamburgerStyle}
                onClick={handleToggleMenu}
                role="button"
                tabIndex={0}
            />
            {isMenuOpen && (
                <div style={mobileNavStyle}>
                    <FontAwesomeIcon
                        icon={faTimes}
                        style={closeButtonStyle}
                        onClick={handleCloseMenu}
                        role="button"
                        tabIndex={0}
                    />
                    <Link to="/" style={linkStyle} onClick={handleCloseMenu}>
                        Home
                    </Link>
                    <Link to="/about" style={linkStyle} onClick={handleCloseMenu}>
                        About
                    </Link>
                    <Link to="/skills" style={linkStyle} onClick={handleCloseMenu}>
                        Skills
                    </Link>
                </div>
            )}
        </div>
    );
};

const linkStyle = {
    color: '#333',
    textDecoration: 'none',
    fontSize: '2rem',
    fontWeight: 'bold',
    padding: '20px',
    display: 'block'
};

export default MobileNav;
