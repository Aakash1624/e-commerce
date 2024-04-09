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
    ? categories_data.filter((category) => category.names === item)
    : categories_data;

  console.log(`Product`, filteredProducts);

  return (
    <div>
      {filteredProducts.map((product) => {
        return (
          <div className="popular-container">
            <div className="product-title-container">
              <h3 className="title">
                {product.names}
                <FaLongArrowAltRight />
              </h3>
            </div>
            <div className="product-items">
              {product.products &&
                product.products.map((items, id) => {
                  // console.log(product);
                  return (
                    <main className="main" key={id}>
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
                        <button className="btn-addCart">Add to Cart</button>
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
    </div>
  );
};
{
}

export default CatPreview;
