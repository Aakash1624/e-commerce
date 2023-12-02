import { useState } from 'react';
import categories_data from '../constants/products';
import React from 'react';
import ProductCart from '../components/productCart/productCart';
import './pages.css';
import { useParams } from 'react-router-dom';

const Shop = () => {
  const { categoryId } = useParams();

  return (
    <>
      <div className="shop">
        <ProductCart />
      </div>
    </>
  );
};

export default Shop;
