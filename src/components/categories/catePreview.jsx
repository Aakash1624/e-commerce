import React, { useState } from 'react';
import Item from '../items/item';
import categories_data from '../../constants/products';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './category.css';
import { useNavigate, useParams } from 'react-router-dom';
import Cart from '../../pages/cart';
import './category.css';

const CatPreview = ({ cart, setCart, product, cartLength }) => {
  let navigate = useNavigate();

  const navigateToCategory = (id) => {
    navigate(`/shop`);
  };

  const { item } = useParams();

  const filteredProducts = item
    ? categories_data.filter((category) => category.names === item)
    : categories_data;

  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      // Update the cart state with the new array
      setCart(updatedCart);
    } else {
      // Product doesn't exist in the cart, add it
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      // Update the cart state with the new array
      setCart(updatedCart);
    }
    // Log the added product
    console.log('Product added to cart:', product);
  };

  return (
    <div>
      {filteredProducts.map((product) => (
        <div className="popular-container" key={product.names}>
          <div className="product-title-container">
            <h3 className="shop-title">
              {product.names}
              <FaLongArrowAltRight />
            </h3>
          </div>
          <div className="product-items">
            {product.products &&
              product.products.map((items) => (
                <main className="main" key={items.names}>
                  <div className="product-item">
                    <div>
                      <img src={items.image} alt="" className="image" />
                    </div>
                    <div className="content-container">
                      <h3 className="product-title">{items.names}</h3>
                      <p>{items.description}</p>
                      <p className="item-price">₹{items.price}</p>
                    </div>
                    <br />
                  </div>
                  <div className="addCart-container">
                    <button
                      className="btn-addCart"
                      onClick={() => addToCart(items)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </main>
              ))}
          </div>
          <br />
          <hr />
        </div>
      ))}
      {/* <Cart cart={cart} /> */}
    </div>
  );
};

export default CatPreview;
