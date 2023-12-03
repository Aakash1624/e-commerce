import { useState } from 'react';
import categories_data from '../constants/products';
import React from 'react';

import './pages.css';
import AllProducts from '../components/productCart/productItemCart';
import CatPreview from '../components/categories/catePreview';

const Shop = () => {
  // const { categoryId } = useParams();

  return (
    <>
      <AllProducts />
      <CatPreview />
    </>
  );
};

export default Shop;
