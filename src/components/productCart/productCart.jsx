import Item from '../items/item';
// import ProductTitle from './productTitle';
import categories_data from '../../constants/products';
import './productCart.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useParams } from 'react-router-dom';

// const { categoryId } = useParams();
const ProductCart = () => {
  return (
    <div className="popular-container">
      <h1 className="popular-title">All Products</h1>
      <hr />
      {categories_data.map((category) => {
        return (
          <>
            <div className="product-title-container">
              <div className="item-title">
                <h3 className="title">
                  {category.names}
                  <FaLongArrowAltRight />
                </h3>
              </div>
            </div>
            <div className="product-items">
              {category.products &&
                category.products.map((product, id) => {
                  return (
                    <Item
                      key={id}
                      id={product.id}
                      image={product.image}
                      names={product.names}
                      description={product.description}
                      price={product.price}
                    />
                  );
                })}
            </div>
            <br />
            <hr />
          </>
        );
      })}
    </div>
  );
};
export default ProductCart;
