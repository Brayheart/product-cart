import React from 'react';

const Drawer = (props) => {

    const { id, children, open, onClose, title } = props

    return (
        <div id={id} className={`drawer-container ${open ? 'drawer-open': 'drawer-close'}`}>
            <div className={`drawer-inner ${open ? 'drawer-display' : 'drawer-hidden'}`}>
                <div className="drawer-header">
                    <div className="drawer-header-inner">
                        <h2 className="drawer-title">{title}</h2>
                        <button className="drawer-close" onClick={onClose} aria-label="Close">X</button>
                    </div>
                </div>
                <div className="drawer-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Drawer