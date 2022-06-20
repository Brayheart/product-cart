import React, { useEffect, useState } from 'react';
import CartDrawer from '../../components/drawer/cartDrawer';

const NavBar = () => {

    const [title, setTitle] = useState(document.title)

    return (
        <nav className="navbar-container">
            <div className="navbar-inner">
                <div className="navbar-links">
                    <h1 className="navbar-title">{title.toUpperCase()}</h1>
                </div>
                <div className="navbar-cart"><CartDrawer /></div>
            </div>
        </nav>
    )
}

export default NavBar