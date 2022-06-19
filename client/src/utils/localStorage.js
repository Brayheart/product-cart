export const getStorageCart = () => {
    const cartData = localStorage.getItem('cartData');
    return cartData !== null ? JSON.parse(cartData) : { cart: [], total: 0, totalQty: 0 }
}

export const setStorageCart = (cartData) => {
    localStorage.setItem('cartData', JSON.stringify(cartData))
}
