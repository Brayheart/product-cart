import React from 'react';
import './drawerStyles.scss';

const Drawer = (props) => {

    const { id, children, open, onClose, title } = props

    return (
        <div id={id} className={`drawer-container ${open ? 'drawer-open': 'drawer-close'}`}>
            <div className={`drawer-inner ${open ? 'drawer-display' : 'drawer-hidden'}`}>
                <div className="drawer-header">
                    <h2 className="drawer-title">{title}</h2>
                    <div className="drawer-close" onClick={onClose}>X</div>
                </div>
                <div className="drawer-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Drawer