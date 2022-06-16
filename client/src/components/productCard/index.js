import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/cartContext';
import { getStorageCart, getCartItemIndex, getCartCount, setStorageCart } from '../../utils/localStorage';
import './productCardStyles.scss';

const ProductCard = (props) => {
    const {item} = props

    const [cartCount, setCartCount] = useState(getCartCount(item))
    const {updateCart} = useContext(CartContext)

    const addToCart = (item) => {
        const cartData = getStorageCart()
        
        const cartItemIndex = getCartItemIndex(cartData, item)

        if (cartItemIndex !== -1) {
            cartData.cart[cartItemIndex].quantity += 1
        } else {
            cartData.cart.push(item);
        }

        setCartCount(cartCount + 1)
        cartData.total += item.price

        updateCart(cartData)
        setStorageCart(cartData)

    }

    const removeFromCart = (item) => {
        const cartData = getStorageCart()
        
        const cartItemIndex = getCartItemIndex(cartData, item)

        if (cartItemIndex !== -1) {
            let cartQuanity = cartData.cart[cartItemIndex].quantity

            if (cartQuanity > 0) {
                cartData.cart[cartItemIndex].quantity -= 1
                cartData.total -= item.price;
                setCartCount(cartCount - 1);

                if (cartData.cart[cartItemIndex].quantity === 0) {
                    cartData.cart.splice(cartItemIndex, 1)
                }

                if (cartData.cart.length === 0) {
                    cartData.total = 0;
                }

            }
            
        } 

        updateCart(cartData)
        setStorageCart(cartData)

    }

    return (
        <div className="product-card-container" data-cart-index="0">
            <div className="product-card-inner">
                <div className="product-card-image-container">
                    <div className="product-card-image-inner">
                        <img src={item.imgUrl} />
                    </div>
                </div>
                <div className="product-card-details">
                    <div className="product-card-details-name">
                        {item.name}
                    </div>
                    <div className="product-card-details-collection">
                        {item.collection} Collection
                    </div>
                    <div className="product-card-details-price">
                        ${Number(item.price).toFixed(2)}
                    </div>
                    <div className="product-card-details-cart-count">
                        Cart Count: {getCartCount(item)}
                    </div>
                    <div className="product-card-details-btns">
                        <button className="product-card-detail-btn btn-add" onClick={()=>addToCart(item)}>Add</button>
                        <button className="product-card-detail-btn btn-remove" onClick={()=>removeFromCart(item)}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard