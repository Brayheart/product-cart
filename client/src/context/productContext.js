import React, { useEffect, useState } from 'react';

let url = '/api/products/all'

if (process.env.NODE_ENV === 'development') {
    url = 'http://localhost:8080/api/products/all'
}

export const ProductContext = React.createContext({
    product: [],
})

export const ProductContextProvider = (props) => {

    const [state, setState] = useState(null)

    useEffect(() => {
        const fetchAllProducts = async () => {
            try {
                let products = await fetch(url).then((response) => response.json())
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