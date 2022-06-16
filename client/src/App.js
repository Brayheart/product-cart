import React from 'react';
import './style.scss';
import { CartContextProvider } from './context/cartContext';
import Layout from './layout';

const App = () => {

    return (
        <CartContextProvider>
            <Layout />
        </CartContextProvider>
    )
}


export default App;