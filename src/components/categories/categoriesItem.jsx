import categories_data from '../../constants/products';
import './category.css';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import CatPreview from './catePreview';

const CategoryCardHome = () => {
  let navigate = useNavigate();

  const navigateToCategory = (id) => {
    console.log(id);
    navigate(`/shop/${id}`);
  };

  return (
    <div className="cat-popular-container">
      <h1>Categories</h1>
      <br />
      <hr />
      <div className="cat-product-items">
        {categories_data.map((catProduct, id) => {
          return (
            <div key={id}>
              <main
                className="main"
                onClick={() => {
                  navigateToCategory(catProduct.names);
                }}
              >
                <div className="category-item">
                  <div className="img-title">
                    <h3 className="title-name">
                      {catProduct.names} <FaLongArrowAltRight />
                    </h3>
                    <img src={catProduct.image} alt="" className="cat-image" />
                  </div>
                </div>
              </main>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryCardHome;
