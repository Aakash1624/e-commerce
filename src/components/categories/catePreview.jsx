import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import categories_data from '../../constants/products';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './category.css';
import { useNavigate, useParams } from 'react-router-dom';

const CatPreview = ({ cart, setCart, product, cartLength }) => {
  const notify = () => {
    toast.success('Product Added to the Cart !', {
      style: { color: 'white', background: '#09f04a', marginTop: '100px' },
    });
  };
  let navigate = useNavigate();

  const { item } = useParams();

  const filteredProducts = item
    ? categories_data.filter((category) => category.names === item)
    : categories_data;

  const addToCart = (product) => {
    // Check if the product already exists in the cart
    const existingProductIndex = cart.findIndex(
      (item) => item.id === product.id
    );
    if (existingProductIndex !== -1) {
      // Product already exists in the cart, update its quantity
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      // Update the cart state with the new array
      setCart(updatedCart);
    } else {
      // Product doesn't exist in the cart, add it
      const updatedCart = [...cart, { ...product, quantity: 1 }];
      // Update the cart state with the new array
      setCart(updatedCart);
    }
    // Notify after updating the cart
    notify();
  };

  return (
    <div>
      <ToastContainer />
      {filteredProducts.map((product) => (
        <div className="popular-container" key={product.id}>
          <div className="product-title-container">
            <h3 className="shop-title">
              {product.names}
              <FaLongArrowAltRight />
            </h3>
          </div>
          <div className="product-items">
            {product.products &&
              product.products.map((items) => (
                <main className="main-product" key={items.id}>
                  <div className="product-item">
                    <img src={items.image} alt="" className="image" />
                    <h3 className="product-title">{items.names}</h3>
                    <p>{items.description}</p>
                    <p className="item-price">₹{items.price}</p>
                    <button
                      className="btn-addCart"
                      onClick={() => addToCart(items)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </main>
              ))}
            <br />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CatPreview;
