import React from 'react';
import './navbarStyles.scss'

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-links">
                <span className="navbar-title">Rugs USA</span>
            </div>
            <div><span className="navbar-cart">Cart</span></div>
        </div>
    )
}

export default NavBar