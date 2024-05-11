import React, { useState } from 'react';
import categories_data from '../../constants/products';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './productCart.css';
import Cart from '../../pages/cart'; // Import the Cart component
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Product = ({ cart, setCart }) => {
  const notify = () => {
    toast.success('Product Added to the Cart !', {
      style: { color: 'white', background: '#09f04a', marginTop: '100px' },
    });
  };

  // Function to add a product to the cart
  const addToCart = (products) => {
    notify();
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === products.id
    );
    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      // Update the cart state with the new array
      setCart(updatedCart);
    } else {
      // Product doesn't exist in the cart, add it
      const updatedCart = [...cart, { ...products, quantity: 1 }];
      // Update the cart state with the new array
      setCart(updatedCart);
    }
    // Log the added product
    console.log('Product added to cart:', products);
  };

  return (
    <div className="popular-container">
      <ToastContainer />
      <h1 className="popular-title">Shop Products</h1>
      <hr className="popular-hr" />
      {categories_data.map((category, index) => {
        return (
          <div key={index}>
            <div className="product-title-container">
              <h3 className="shop-title">
                {category.names}
                <FaLongArrowAltRight />
              </h3>
            </div>
            <div className="product-items">
              {category.products &&
                category.products.map((products) => {
                  return (
                    <main className="main" key={products.id}>
                      <div className="product-item">
                        <div>
                          <img src={products.image} alt="" className="image" />
                        </div>
                        <div className="content-container">
                          <h3 className="product-title">{products.names}</h3>
                          <p>{products.description}</p>
                          <p className="item-price">₹{products.price}</p>
                        </div>
                      </div>
                      <div className="addCart-container">
                        <button
                          className="btn-addCart"
                          onClick={() => {
                            addToCart(products);
                          }}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </main>
                  );
                })}
            </div>
            <br />
            <hr className="product-hr" />
          </div>
        );
      })}
      {/* Render the Cart component and pass the cart state as prop */}
      {/* <Cart cart={cart} /> */}
    </div>
  );
};

export default Product;
