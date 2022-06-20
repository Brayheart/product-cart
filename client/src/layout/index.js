import React from 'react';
import NavBar from './navbar';
import ProductGrid from '../components/productGrid';

const Layout = () => {
    return (
        <React.Fragment>
            <header>
                <NavBar />
            </header>
            <main className="layoutContainer">
                <div className="layoutBody">
                    <div className='layoutInner'>
                        <ProductGrid />
                    </div>
                </div>
            </main>
        </React.Fragment>
    )
}

export default Layout