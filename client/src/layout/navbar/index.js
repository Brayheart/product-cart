import React from 'react';
import CartDrawer from '../../components/drawer/cartDrawer';
import './navbarStyles.scss'

const NavBar = () => {
    return (
        <nav className="navbar-container">
            <div className="navbar-inner">
                <div className="navbar-links">
                    <h1 className="navbar-title">RUGS USA</h1>
                </div>
                <div className="navbar-cart"><CartDrawer /></div>
            </div>
        </nav>
    )
}

export default NavBar