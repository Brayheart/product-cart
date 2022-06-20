import React from 'react';
export const ProductContext = React.createContext({
    product: [],
})

export const ProductContextProvider = ({ children }) => {
    return (
        <ProductContext.Provider value={[
            {
                imgUrl: 'https://www.mobygames.com/images/covers/l/153013-pokemon-red-version-game-boy-front-cover.jpg',
                product: 'DMG-P-USA',
                productName: 'Pokemon Red',
                price: 51.5,
                quantity: 1
            }
        ]}>
            {children}
        </ProductContext.Provider>
    )
};