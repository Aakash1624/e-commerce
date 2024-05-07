import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { CiSquarePlus } from 'react-icons/ci';
import { CiSquareMinus } from 'react-icons/ci';

const Cart = ({ cart, setCart }) => {
  const removeItemFromCart = (id) => {
    // Filter out the item with the given id and update the cart state
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
  };

  const handleIncrease = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      );
      return updatedCart;
    });
  };

  const handleDecrease = (id) => {
    setCart((prevCart) => {
      const updatedCart = prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      // Remove the item from the cart if the quantity becomes 0
      const filteredCart = updatedCart.filter((item) => item.quantity !== 0);
      return filteredCart;
    });
  };

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
          {cart.map((item) => (
            <div className="cart-items-title cart-items-item" key={item.id}>
              <img src={item.image} alt={item.name} />
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <div className="quantity">
                <p
                  className="btn-quantity"
                  onClick={() => handleIncrease(item.id)}
                >
                  <CiSquarePlus />
                </p>
                <p>{item.quantity || 1}</p> {/* Start quantity from 1 */}
                <p
                  className="btn-quantity"
                  onClick={() => handleDecrease(item.id)}
                >
                  <CiSquareMinus />
                </p>
              </div>
              <p>₹{item.price * (item.quantity || 1)}</p>{' '}
              {/* Calculate total */}
              <p className="delete" onClick={() => removeItemFromCart(item.id)}>
                <RxCross2 />
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-amt">Total amount : ₹0</div>
    </>
  );
};

export default Cart;
