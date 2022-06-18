import React from 'react';
import './main.scss';
import { CartContextProvider } from './context/cartContext';
import { ProductContextProvider } from './context/productContext';
import Layout from './layout';

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