import { useContext } from 'react';

const Cart = () => {

  // const {cartItems,food_list,removeCart} = useContext();
  return (
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
  );
};

export default Cart;
