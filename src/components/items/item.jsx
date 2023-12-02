import React from 'react';
import './item.css';

const Item = (props) => {
  return (
    <main className="main">
      <div className="item">
        <div>
          <img src={props.image} alt="" className="image" />
        </div>
        <h3>{props.names}</h3>
        <p>{props.description}</p>
        <p className="item-price">₹{props.price}</p>
        <br />
      </div>
      <div className="addCart-container">
        <button className="btn-addCart">Add to Cart</button>
      </div>
    </main>
  );
};

export default Item;
