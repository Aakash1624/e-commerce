import { useState } from 'react';
import categories_data from '../constants/products';
import React from 'react';

import './pages.css';
import Product from '../components/productCart/productItemCart';

const Shop = ({ cart, setCart }) => {
  return (
    <>
      <Product cart={cart} setCart={setCart} />;
    </>
  );
};

export default Shop;
