import { useContext } from 'react';

const Cart = () => {
  // const {cartItems,food_list,removeCart} = useContext();
  return (
    <>
      <div className="cart-page">
        <div className="cart-items">
          <div className="cart-items-title">
            <p>Items</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
          </div>
        </div>
      </div>

      <div className="cart-container">
        <div className="cart-product">
          <div className="cart-img">
            <img src="src\assets\souled\T-shirt_1.webp" alt="" />
          </div>
          <div className="cart-product-details">
            <p>T-shirt</p>
            <p>₹0</p>
            <p>1</p>
            <p>₹0</p>
            <p>X</p>
          </div>
        </div>
      </div>
      <div className="cart-amt">Total amount : ₹0</div>
    </>
  );
};

export default Cart;
