import React, {useState} from 'react';

export const CartContext = React.createContext({
    cart: [],
    updateCart: () => {},
})

export const CartContextProvider = (props) => {

    const updateCart = (newCart) => setState({...state, cart: newCart})
    
    
    const initialStore = {
        cart: [{name: 'Jute Braided Rug'}],
        updateCart: updateCart
    }

    const [state, setState] = useState(initialStore)
    
    return (
        <CartContext.Provider value={state}>
            {props.children}
        </CartContext.Provider>
    )
}