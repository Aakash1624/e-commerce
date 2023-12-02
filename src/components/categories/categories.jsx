import categories_data from '../../constants/products';
import './category.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import CatPreview from './catePreview';

const CategoryCardHome = () => {
  return (
    <div className="cat-popular-container">
      <div className="cat-product-items">
        {categories_data.map((catProduct, id) => {
          return (
            <div>
              <CatPreview
                key={id}
                id={catProduct.id}
                image={catProduct.image}
                names={catProduct.names}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategoryCardHome;
