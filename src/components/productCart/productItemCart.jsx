import React, { useState } from 'react';
import categories_data from '../../constants/products';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './productCart.css';
import Cart from '../../pages/cart'; // Import the Cart component

const Product = ({ cart, setCart, product }) => {
  // Define state to manage the cart
  // const [cart, setCart] = useState([]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    // Make a copy of the current cart state and add the new product
    const updatedCart = [...cart, product];
    // Update the cart state with the new array
    setCart(updatedCart);
    // Log the added product
    console.log('Product added to cart:', product);
  };

  return (
    <div className="popular-container">
      <h1 className="popular-title">All Products</h1>
      <hr />
      {categories_data.map((category, index) => {
        return (
          <div key={index}>
            <div className="product-title-container">
              <h3 className="main-title">
                {category.names}
                <FaLongArrowAltRight />
              </h3>
            </div>
            <div className="product-items">
              {category.products &&
                category.products.map((product, id) => {
                  return (
                    <main className="main" key={id}>
                      <div className="product-item">
                        <div>
                          <img src={product.image} alt="" className="image" />
                        </div>
                        <div className="content-container">
                          <h3 className="product-title">{product.names}</h3>
                          <p>{product.description}</p>
                          <p className="item-price">₹{product.price}</p>
                        </div>
                        <br />
                      </div>
                      <div className="addCart-container">
                        {/* Pass the product to the addToCart function */}
                        <button
                          className="btn-addCart"
                          onClick={() => addToCart(product)}
                        >
                          Add to Cart
                        </button>
                      </div>
                    </main>
                  );
                })}
            </div>
            <br />
            <hr />
          </div>
        );
      })}
      {/* Render the Cart component and pass the cart state as prop */}
      <Cart cart={cart} />
    </div>
  );
};

export default Product;
