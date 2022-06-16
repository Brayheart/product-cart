import React from 'react';
import ProductCard from '../productCard';
import './productGridStyles.scss'

const ProductGrid = () => {
    return (
        <section className="product-grid-container">
            {[...Array(16)].map(i =>  <ProductCard />)}
        </section>
    )
}

export default ProductGrid;