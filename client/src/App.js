import React from 'react';
import './style.scss';
import { CartContextProvider } from './context/cartContext';
import Home from './home';

const App = () => {

    return (
        <CartContextProvider>
            <Home />
        </CartContextProvider>
    )
}


export default App;