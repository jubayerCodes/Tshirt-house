import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className='header'>
            <div className="header-container">
                <nav className="header-nav">
                    <Link className='link-item' to="/">Home</Link>
                    <Link className='link-item' to="/about">About</Link>
                    <Link className='link-item' to="/review">Review Orders</Link>
                    <Link className='link-item' to="/contact">Contact</Link>
                </nav>
            </div>
        </header>
    );
};

export default Header;