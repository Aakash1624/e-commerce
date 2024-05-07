import { useState } from 'react';
import categories_data from '../constants/products';
import React from 'react';

import './pages.css';
import Product from '../components/productCart/productItemCart';

const Shop = ({ cart, setCart }) => {
  const [products] = useState(categories_data);
  return (
    <>
      {products.map((product) => (
        <Product
          key={product.id}
          product={product}
          cart={cart}
          setCart={setCart}
        />
      ))}
    </>
  );
};

export default Shop;
