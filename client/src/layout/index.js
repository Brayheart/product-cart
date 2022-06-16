import React from 'react';
import NavBar from './navbar';
import ProductGrid from '../component/productGrid';
import './layoutStyles.scss';

const Layout = () => {
    return (
        <React.Fragment>
            <NavBar />
            <div className="layoutContainer">
                <div className="layoutBody">
                    <div className='layoutInner'>
                        <ProductGrid />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Layout