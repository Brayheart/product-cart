import React, { useContext } from 'react';
import ProductCard from '../productCard';
import { ProductContext } from '../../context/productContext';
import './productGridStyles.scss'

const ProductGrid = () => {

    const products = useContext(ProductContext)

    if (products === null) {
        return <section className="product-loading">...loading Products</section>
    }

    if (products.length > 0) {
        return (
            <section className="product-grid-container">
                {products.map(item => <ProductCard key={item.name} item={item} />)}
            </section>
        )
        return 
    }

    return <section className="product-no-items">Sorry we're having trouble getting products. Check back again later!</section>
}

export default ProductGrid;