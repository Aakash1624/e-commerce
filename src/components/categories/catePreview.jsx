import Item from '../items/item';
import categories_data from '../../constants/products';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './category.css';
import { Link, useNavigate } from 'react-router-dom';

const CatPreview = (catProps, id) => {
  <div className="category-container">
    <div className="preview">
      {categories_data
        .filter((product, index) => index < 4)
        .map((products) => (
          <Item key={products.id} product={products} />
        ))}
    </div>
    {/* return (
    <Item
      key={id}
      image={catProps.image}
      names={catProps.names}
      description={catProps.description}
      id={catProps.id}
      price={catProps.price}
    />
    ); */}
  </div>;
  const navigate = useNavigate();

  const navigateHandler = (category) => {
    navigate(`/shop/${category.toLowerCase()}`);
  };
  return (
    <main className="cat-main" key={id}>
      <div
        className="cat-item"
        onClick={() => {
          navigateHandler(catProps.names);
        }}
      >
        <div className="img-title">
          <h3 className="title-name">
            {catProps.names} <FaLongArrowAltRight />
          </h3>
          <img src={catProps.image} alt="" className="cat-image" />
        </div>
        <button className="button-shop">Shop Now</button>
      </div>
    </main>
  );
};

export default CatPreview;
