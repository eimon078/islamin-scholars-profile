import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className="header">
            <div className="header-container">
                <div className="header-title">
                    <h3><span>Islamic</span> Events</h3>
                </div>
                <nav>
                    <a className='active' href="./home">Home</a>
                    <a href="/about">About Us</a>
                    <a href="/events">Events</a>
                    <a href="/contact">Contact</a>
                    <a href="/reservation">Reservation</a>
                </nav>
            </div>
            <div className="budget-field">
                <h2>Total Event Budget: $<span>50000</span></h2>
            </div>
        </div>
    );
};

export default Header;