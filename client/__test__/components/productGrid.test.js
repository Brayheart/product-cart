import React, { useContext } from 'react'
import renderer from 'react-test-renderer';
import ProductGrid from '../../src/components/productGrid';
import { CartContextProvider } from '../../src/context/cartContext';
import { ProductContextProvider } from '../../src/context/productContext';
jest.mock('./../../src/context/productContext');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
});

it('displays a grid of products', () => {

    const component = renderer.create(
        <ProductContextProvider>
            <CartContextProvider>
                <ProductGrid />
            </CartContextProvider>
        </ProductContextProvider>
    )

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot()
})