import React, { useState } from 'react'
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
    
    const {cart, total} = getStorageCart()

    return (
        <React.Fragment>
            <span className='cart-drawer-span' onClick={()=> setOpen(!open)}>Cart</span>
            <Drawer
                id={"cart-drawer"}
                open={open}
                onClose={() => setOpen(false)}
                title={'Cart'}>
                <section className="cart-drawer-section">
                    <div className="cart-drawer-section-inner">
                        <ul className='cart-drawer-ul'>
                            {cart.map(item => <CartItemCard item={item} />)}
                        </ul>
                        <div className="cart-drawer-product-total">
                            total: ${total.toFixed(2)}
                        </div>
                    </div>
                </section>
            </Drawer>
        </React.Fragment>)
}

export default CartDrawer;