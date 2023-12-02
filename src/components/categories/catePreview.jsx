import Item from '../items/item';
import categories_data from '../../constants/products';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './category.css';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const CatPreview = (catProps, id) => {
  const navigate = useNavigate();
  const navigateHandler = (category) => {
    navigate(`/shop`);
  };

  let [item, setItem] = useState('');
  // item = useParams();
  // console.log(item);

  const filteredProducts = item
    ? categories_data.filter((category) => category.names === item)
    : categories_data;

  // console.log(filteredProducts);

  return (
    <main className="cat-main">
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
    // <>
    //   {filteredProducts.map((categories) => {
    //     return (
    //       <main className="cat-main">
    //         <div
    //           className="cat-item"
    //           onClick={() => {
    //             navigateHandler(categories.names);
    //           }}
    //         >
    //           <div className="img-title">
    //             <h3 className="title-name">
    //               {categories.names} <FaLongArrowAltRight />
    //             </h3>
    //             <img src={categories.image} alt="" className="cat-image" />
    //           </div>
    //           {/* <button className="button-shop">Shop Now</button> */}
    //         </div>
    //       </main>
    //     );
    //   })}
    // </>
  );

  // <div className="cat-main">
  //   {filteredProducts.map((category, id) => {
  //     return (
  //       <div key={id}>
  //         <div className="img-title">
  //           <p className="title-name">
  //             {category.names} <FaLongArrowAltRight />
  //           </p>
  //           <img src={category.image} alt="" className="cat-image" />
  //           <button onClick={navigateHandler} className="button-shop">
  //             Shop Now
  //           </button>
  //         </div>

  //         <div className="product-card-container">
  //           {category.products.map((product, id) => {
  //             return (
  //               <Item
  //                 key={id}
  //                 id={product.id}
  //                 names={product.names}
  //                 image={product.image}
  //                 price={product.price}
  //                 description={product.description}
  //               />
  //             );
  //           })}
  //         </div>
  //       </div>
  //     );
  //   })}
  // </div>

  // return (
  //   <span key={category.id}>
  //     <div className="product-category">
  //       <p className="product-category-title">{category.title}</p>
  //       <button onClick={navigateHandler}>All category</button>
  //     </div>

  //     <div className="product-card-container">
  //       {category.products.map((product) => {
  //         return <ProductCart key={product.id} product={product} />;
  //       })}
  //     </div>
  //   </span>
  // );
};

export default CatPreview;
