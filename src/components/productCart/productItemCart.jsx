import categories_data from '../../constants/products';
import './productCart.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './productCart.css';
// import { storeContext } from '../../context/storeContext';

// import { useContext } from 'react';

const AllProducts = () => {
  // const { addToCart } = useContext(storeContext);
  return (
    <div className="popular-container">
      <h1 className="popular-title">All Products</h1>
      <hr />
      {categories_data.map((category) => {
        // console.log( category);
        return (
          <>
            <div className="product-title-container">
              <h3 className="main-title">
                {category.names}
                <FaLongArrowAltRight />
              </h3>
            </div>
            <div className="product-items">
              {category.products &&
                category.products.map((product, id) => {
                  // console.log(product);
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
                        <button className="btn-addCart">Add to Cart</button>
                      </div>
                    </main>
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
export default AllProducts;
