import React, {useState} from 'react';
import './productCardStyles.scss';

const item =   {
    name: "Custom Rug",
    collection: 'Custom',
    price: 60.1,
  }

const ProductCard = (props) => {
    const [cartCount, setCartCount] = useState(0)

    const addToCart = () => {
        setCartCount(cartCount+1)
    }

    const removeFromCart = () => {
        if (cartCount === 0) {
            return;
        }
        setCartCount(cartCount-1)
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
                        Cart Count: {cartCount}
                    </div>
                    <div className="product-card-details-btns">
                        <button className="product-card-detail-btn btn-add" onClick={()=>addToCart()}>Add</button>
                        <button className="product-card-detail-btn btn-remove" onClick={()=>removeFromCart()}>Remove</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard