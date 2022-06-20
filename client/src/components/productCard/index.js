import React, { useContext } from 'react';
import { CartContext } from '../../context/cartContext';

const ProductCard = (props) => {
    const {item} = props

    const {addCartItem, removeCartItem, getCartItemCount} = useContext(CartContext)

    return (
        <article className="product-card-container" data-cart-index="0">
            <div className="product-card-inner">
                <div className="product-card-image-container">
                    <div className="product-card-image-inner">
                        <img src={item.imgUrl.split('?')[0]} alt={item.name} />
                    </div>
                </div>
                <div className="product-card-details">
                    <div className="product-card-details-name">
                        <h3>{item.productName}</h3>
                    </div>
                    {
                        item.collection &&
                        <div className="product-card-details-collection">
                            {item.collection} Collection
                        </div>
                    }
                    <div className="product-card-details-price">
                        ${Number(item.price).toFixed(2)}
                    </div>
                    <div className="product-card-details-cart-count">
                        Cart Count: {getCartItemCount(item)}
                    </div>
                    <div className="product-card-details-btns">
                        <button className="product-card-detail-btn btn-add" onClick={()=>addCartItem(item)}>Add</button>
                        <button className="product-card-detail-btn btn-remove" onClick={()=>removeCartItem(item)}>Remove</button>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default ProductCard