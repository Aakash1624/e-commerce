import Item from '../items/item';
import categories_data from '../../constants/products';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CatPreview = (catProps, id) => {
  let [filterType, setFilterType] = useState('');

  <div className="category-container">
    return (
    <Item
      key={id}
      image={catProps.image}
      names={catProps.names}
      description={catProps.description}
      id={catProps.id}
      price={catProps.price}
    />
    );
  </div>;

  return (
    <main className="cat-main" key={catProps.id}>
      <div
        className="cat-item"
        value={filterType}
        onClick={(e) => setFilterType(e.target.value)}
      >
        <div className="img-title">
          <h3 className="title-name">
            {catProps.names} <FaLongArrowAltRight />
          </h3>
          <img src={catProps.image} alt="" className="cat-image" />
        </div>
        <div className="addCart-container">
          <button
            value={catProps.names}
            className="btn-ShopNow"
            onClick={() => {
              categories_data.map((obj) => {
                console.log(filterType);
                console.log(obj);
              });
            }}
          >
            Shop Now
          </button>
        </div>
      </div>
    </main>
  );
};

export default CatPreview;
