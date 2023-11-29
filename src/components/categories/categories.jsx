import categories_data from '../../constants/products';
import CatProduct from './categoriesCard';
import './categories.css';

const CatCard = () => {
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
