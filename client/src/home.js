import React, {useContext} from 'react';
import { CartContext } from './context/cartContext';

const Home = () => {
    const { cart } = useContext(CartContext)

    return (
        <div>
            {cart.map(item => <h1 key={item.name}>{item.name}</h1>)}
        </div>
    )
}

export default Home;