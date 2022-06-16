import React, {useEffect, useState} from 'react';
import { getStorageCart } from '../utils/localStorage';

export const CartContext = React.createContext({
    cart: [],
    total: 0,
    totalQty: 0,
    updateCart: () => {},
})

export const CartContextProvider = (props) => {

    const updateCart = (cartData) => setState({...state, ...cartData})
    
    const initialStore = {
        cart: [],
        total: 0,
        totalQty: 0,
        updateCart: updateCart
    }

    const [state, setState] = useState(initialStore)

    useEffect(() => {
        const { cart, total, totalQty } = getStorageCart();
        
        setState({...state, cart, total, totalQty})
    }, [])
    
    return (
        <CartContext.Provider value={state}>
            {props.children}
        </CartContext.Provider>
    )
}