import React from 'react';
import CartDrawer from '../../components/drawer/cartDrawer';
import './navbarStyles.scss'

const NavBar = () => {
    return (
        <div className="navbar-container">
            <div className="navbar-inner">
                <div className="navbar-links">
                    <span className="navbar-title">Rugs USA</span>
                </div>
                <div className="navbar-cart"><CartDrawer /></div>
            </div>
        </div>
    )
}

export default NavBar