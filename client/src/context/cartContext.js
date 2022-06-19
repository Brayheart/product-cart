import React, {useEffect, useState} from 'react';
import { getStorageCart, setStorageCart} from '../utils/localStorage';

export const CartContext = React.createContext({
    cart: [],
    total: 0,
    totalQty: 0
})

const storageCart = getStorageCart();

export const CartContextProvider = (props) => {

    const updateCart = (cartData) => setState({ ...state, ...cartData })

    const getCartItemIndex = (item) => {
        return state.cart.findIndex(cartItem => cartItem.product === item.product)
    }

    const getCartItemCount = (item) => {
        const { cart } = state
        if (cart.length === 0) {
            return 0;
        }

        const index = getCartItemIndex(item)

        return cart[index] ? cart[index].cartCount : 0
    }

    const addCartItem = (item) => {
        const cartData = Object.assign(state, {})
        
        const cartItemIndex = getCartItemIndex(item)

        if (cartItemIndex !== -1) {
            cartData.cart[cartItemIndex].cartCount += 1
        } else {
            cartData.cart.push({...item, cartCount: 1});
        }

        cartData.totalQty += 1
        cartData.total += item.price

        updateCart(cartData)
        setStorageCart(cartData)
    }

    const removeCartItem = (item) => {
        const cartData = Object.assign(state, {})
        
        const cartItemIndex = getCartItemIndex(item)

        if (cartItemIndex !== -1) {
            let cartQuanity = cartData.cart[cartItemIndex].cartCount || 0

            if (cartQuanity > 0) {
                cartData.cart[cartItemIndex].cartCount -= 1
                cartData.total -= item.price;
                cartData.totalQty -= 1

                if (cartData.cart[cartItemIndex].cartCount === 0) {
                    cartData.cart.splice(cartItemIndex, 1)
                }
            }
            
        } 

        if (cartData.cart.length === 0) {
            cartData.totalQty = 0
            cartData.total = 0;
        }

        updateCart(cartData)
        setStorageCart(cartData)
    }
    
    const initialStore = {
        ...storageCart,
        addCartItem,
        removeCartItem,
        getCartItemCount,
    }

    const [state, setState] = useState(initialStore)

    return (
        <CartContext.Provider value={state}>
            {props.children}
        </CartContext.Provider>
    )
}