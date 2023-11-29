import Item from '../items/item';
import ProductTitle from './productTitle';
import categories_data from '../../constants/products';
import './productCart.css';

const ProductCart = () => {
  return (
    <div className="popular-container">
      <h1>All Products</h1>
      <hr />
      {categories_data.map((category, id) => {
        return (
          <>
            <div className="product-title-container">
              <ProductTitle key={id} id={category.id} name={category.name} />
            </div>
            <div className="product-items">
              {category.products &&
                category.products.map((product, id) => {
                  return (
                    <Item
                      key={id}
                      id={product.id}
                      image={product.image}
                      name={product.name}
                      description={product.description}
                      price={product.price}
                    />
                  );
                })}
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ProductCart;
