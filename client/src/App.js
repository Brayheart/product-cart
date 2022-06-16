import React from 'react';
import './style.scss';
import { CartContextProvider } from './context/cartContext';
import Layout from './layout';
import { ProductContextProvider } from './context/productContext';

const App = () => {

    return (
        <ProductContextProvider>
            <CartContextProvider>
                <Layout />
            </CartContextProvider>
        </ProductContextProvider>
    )
}


export default App;