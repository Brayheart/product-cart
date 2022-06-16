import React, { useContext } from 'react';
import ProductCard from '../productCard';
import { ProductContext } from '../../context/productContext';
import './productGridStyles.scss'

const ProductGrid = () => {

    const products = useContext(ProductContext)

    return (
        <section className="product-grid-container">
            {products.map(item => <ProductCard key={item.name} item={item} />)}
        </section>
    )
}

export default ProductGrid;