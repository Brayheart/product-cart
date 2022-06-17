import React, { useEffect, useState } from 'react';


export const ProductContext = React.createContext({
    product: [],
})

export const ProductContextProvider = (props) => {

    const [state, setState] = useState(null)

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                let products = await fetch('http://localhost:8080/api/products/all').then((response) => response.json())
                setState(products)
            } catch (error) {
                setState([])
            }
        }

        fetchAllProducts()
    }, [])
    
    return (
        <ProductContext.Provider value={state}>
            {props.children}
        </ProductContext.Provider>
    )
}