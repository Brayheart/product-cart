import React, { useState } from 'react'
import Drawer from '../index';
import './cartDrawerStyles.scss';

const CartDrawer = (props) => {

    const [open, setOpen] = useState(false)

    return (
        <React.Fragment>
            <span className='cart-drawer-span' onClick={()=> setOpen(!open)}>Cart</span>
            <Drawer
                id={"cart-drawer"}
                open={open}
                onClose={() => setOpen(false)}
                title={'Cart'}>
                {/* implement cart body here */}
            </Drawer>
        </React.Fragment>)
}

export default CartDrawer;