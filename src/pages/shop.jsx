import { useState } from 'react';
import categories_data from '../constants/products';
import React from 'react';
import ProductCart from '../components/productCart/productCart';
import './pages.css';

const Shop = () => {
  const [data, setData] = useState(categories_data);
  const shopNow = (catItem) => {
    const result = categories_data.filter((curData) => {
      return curData.name === catItem.name;
    });
    setData(result);
  };
  return (
    <>
      <div className="shop">
        <ProductCart />
      </div>
      {/* <div>
        {categories_data.map((item) => {
          <Shop key={id} id={item.id} name={item.name}  />;
        })}
        <div className="btn">
          <button
            onClick={() => {
              shopNow(categories_data.name);
            }}
          >
            Shirt
          </button>
          <button>Cotton Pant</button>
          <button>Cap </button>
        </div>
      </div> */}
    </>
  );
};

export default Shop;
