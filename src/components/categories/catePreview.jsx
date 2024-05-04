import React, { useState } from 'react';
import Item from '../items/item';
import categories_data from '../../constants/products';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './category.css';
import { useNavigate, useParams } from 'react-router-dom';

const CatPreview = () => {
  const [cartItems, setCartItems] = useState([]);

  let navigate = useNavigate();

  const navigateToCategory = (id) => {
    navigate(`/shop`);
  };

  const { item } = useParams();

  const filteredProducts = item
    ? categories_data.filter((category) => category.names === item)
    : categories_data;

  const addToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log('Added to cart:', item); // Logging the added item to the console
  };

  return (
    <div>
      {filteredProducts.map((product) => (
        <div className="popular-container" key={product.names}>
          <div className="product-title-container">
            <h3 className="title">
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
    </div>
  );
};

export default CatPreview;
