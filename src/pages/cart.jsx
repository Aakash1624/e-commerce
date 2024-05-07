import { useContext } from 'react';
import { RxCross2 } from 'react-icons/rx';

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
          <br />
          <hr />
        </div>
      </div>

      <div className="cart-items-title cart-items-item">
        <img src="src\assets\souled\T-shirt_1.webp" alt="" />
        <p>T-shirt</p>
        <p>₹0</p>
        <p>1</p>
        <p>₹0</p>
        <p className="delete">
          <RxCross2 />
        </p>
      </div>
      <div className="cart-amt">Total amount : ₹0</div>
    </>
  );
};

export default Cart;
