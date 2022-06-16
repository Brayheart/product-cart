import React, { useContext, useState } from 'react'
import { CartContext } from '../../../context/cartContext';
import { getStorageCart } from '../../../utils/localStorage';
import Drawer from '../index';
import './cartDrawerStyles.scss';

const CartItemCard = (prop) => {
    const { item } = prop;

    return (
        <li>
            <div className="cart-li-inner">
                <div className="cart-li-img">
                    <img src={item.imgUrl} />
                </div>
                <div className="cart-li-product-details">
                    <div>
                        <div className="cart-li-product-name">
                            {item.name}
                        </div>
                        <div className="cart-li-product-collection">
                            {item.collection} Collection
                        </div>
                    </div>
                    <div className="cart-li-product-quantity">
                        Qty: {item.quantity}
                    </div>
                </div>
            </div>
        </li>
    )
}


const CartDrawer = (props) => {

    const [open, setOpen] = useState(false)

    const {cart, total, totalQty} = useContext(CartContext)

    return (
        <React.Fragment>
            <button className='cart-drawer-btn' onClick={() => setOpen(!open)}>Cart {totalQty > 0 && `(${totalQty})`}</button>
            <Drawer
                id={'cart-drawer'}
                open={open}
                onClose={() => setOpen(false)}
                title={'Cart'}>
                <section className="cart-drawer-section">
                    <div className="cart-drawer-section-inner">
                        {
                            cart.length > 0 ?
                                <React.Fragment>
                                    <ul className='cart-drawer-ul'>
                                        {cart.map(item => <CartItemCard key={item.name} item={item} />)}
                                    </ul>
                                    <div className="cart-drawer-product-total">
                                        total: ${total.toFixed(2)}
                                    </div>
                                </React.Fragment>
                                :
                                <div className='cart-drawer-is-empty'>
                                    There are currently no items in the cart
                                </div>
                        }
                    </div>
                </section>
            </Drawer>
        </React.Fragment>)
}

export default CartDrawer;