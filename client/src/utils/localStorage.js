export const getStorageCart = () => {
    const cartData = localStorage.getItem('cartData');
    return cartData !== null ? JSON.parse(cartData) : { cart: [], total: 0 }
}

export const getCartItemIndex = (cartData, item) => {
    return cartData.cart.findIndex(cartItem => cartItem.product === item.product)
}

export const getCartCount = (item) => {
    const cartData = getStorageCart();
    const cartItemIndex = getCartItemIndex(cartData, item)

    if (cartItemIndex === -1) {
        return 0;
    }

    return cartData.cart[cartItemIndex].quantity
}

export const setStorageCart = (cartData) => {
    localStorage.setItem('cartData', JSON.stringify(cartData))
}
