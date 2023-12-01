import categories_data from '../../constants/products';
import './categories.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useState } from 'react';
import Item from '../items/item';

const CatCard = () => {
  const CatProduct = (catProps) => {
    // const [data, setData] = useState(categories_data);
    // const shopNow = (catItem) => {
    //   const result = categories_data.filter((curData) => {
    //     return curData.name === catItem;
    //   });
    //   setData(result);
    // };

    <div className="category-container">
      {categories_data &&
        categories_data.map((products,id) => {
          return (
            <Item
              key={id}
              image={products.image}
              name={products.name}
              description={products.description}
              id={products.id}
              price={products.price}
            />
          );
        })}
    </div>;

    return (
      <main className="cat-main">
        <div className="cat-item">
          <div className="img-title">
            <h3 className="title-name">
              {catProps.name} <FaLongArrowAltRight />
            </h3>
            <img src={catProps.image} alt="" className="cat-image" />
          </div>
          <div className="addCart-container">
            <button
              className="btn-ShopNow"
              onClick={() => {
                <Shop />;
              }}
            >
              Shop Now
            </button>
          </div>
        </div>
      </main>
    );
  };

  return (
    <div className="cat-popular-container">
      <div className="cat-product-items">
        {categories_data.map((catProduct, id) => {
          return (
            <CatProduct
              key={id}
              id={catProduct.id}
              image={catProduct.image}
              name={catProduct.name}
            />
          );
        })}
      </div>
    </div>
  );
};
export default CatCard;
// export default data;
// export default result;
