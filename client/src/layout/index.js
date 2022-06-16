import React from 'react';
import NavBar from './navbar';
import './layoutStyles.scss';

const Layout = () => {
    return (
        <React.Fragment>
            <NavBar />
            <div className="layoutContainer">
                <div className="layoutBody">
                    Product Grid here
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout