import Item from '../items/item';
import categories_data from '../../constants/products';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './category.css';
import { useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';

const CatPreview = (catProps) => {
  let navigate = useNavigate();

  const navigateToCategory = (id) => {
    // console.log(id);
    navigate(`/shop`);
  };

  const { item } = useParams();
  console.log(`Hello`, item);

  const filteredProducts = item
    ? categories_data.filter((category) => category.names === item.names)
    : categories_data;

  console.log(filteredProducts);

  return (
    <div>
      {filteredProducts.map((product) => {
        return (
          <div className="product-title-container">
            <h3 className="title">
              {product.names}
              <FaLongArrowAltRight />
            </h3>

            <div>
              {product.products &&
                product.products.map((items) => {
                  // console.log(items);
                  return (
                    <main className="main">
                      <div className="item">
                        <div>
                          <img src={items.image} alt="" className="image" />
                        </div>
                        <h3>{items.names}</h3>
                        <p>{items.description}</p>
                        <p className="item-price">₹{items.price}</p>
                        <br />
                      </div>
                      <div className="addCart-container">
                        <button className="btn-addCart">Add to Cart</button>
                      </div>
                    </main>
                  );
                })}
            </div>
          </div>
        );
      })}
      <main className="cat-main">
        <div className="cat-item">
          <div className="img-title">
            <h3 className="title-name">
              {catProps.names} <FaLongArrowAltRight />
            </h3>
            <img src={catProps.image} alt="" className="cat-image" />
          </div>
          <button className="button-shop">Shop Now</button>
        </div>
      </main>
    </div>
  );
};

export default CatPreview;
