import { useState } from 'react';
import categories_data from '../constants/products';
import React from 'react';

import './pages.css';
import AllProducts from '../components/productCart/productItemCart';

const Shop = () => {
  return (
    <>
      <AllProducts />
    </>
  );
};

export default Shop;
