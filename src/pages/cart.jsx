import { React, useState } from 'react';
import { RxCross2 } from 'react-icons/rx';
import { CiSquarePlus } from 'react-icons/ci';
import { CiSquareMinus } from 'react-icons/ci';
import MyComponent from '../components/categories/popup';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Cart = ({ cart, setCart }) => {
  const notify = () => {
    toast.success('Successfully placed your Order!', {
      style: { color: 'white', background: '#09f04a', marginTop: '100px' },
    });
  };
  const [processing, setProcessing] = useState(false);
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
      // Update the cart with decreased quantity
      const updatedCart = prevCart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      console.log('Updated Cart after decrease:', updatedCart); // Log updated cart

      // Filter out the item with quantity 0
      const filteredCart = updatedCart.filter(
        (item) => item.quantity !== 0 || item.id !== id
      );
      console.log('Filtered Cart after decrease:', filteredCart); // Log filtered cart

      return filteredCart;
    });
  };

  const totalAmount = cart.reduce((total, item) => {
    return total + item.price * (item.quantity || 1);
  }, 0);

  const checkOut = () => {
    if (cart.length === 0) {
      return; // Don't proceed if the cart is empty
    } else {
      // Display processing message
      setProcessing(true);

      // Clear the cart after 3 to 5 seconds
      setTimeout(() => {
        setCart([]);
        setProcessing(false); // Remove processing message after clearing the cart
      }, Math.floor(Math.random() * (5000 - 3000 + 1)) + 3000); // Random delay between 3 to 5 seconds
    }
    notify();
  };

  return (
    <>
      <ToastContainer />
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
              <img src={item.image} alt={item.names} />
              <p>{item.names}</p>
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
              <p>₹{item.price * (item.quantity || 1)}</p>
              {/* Calculate total */}
              <p className="delete" onClick={() => removeItemFromCart(item.id)}>
                <RxCross2 />
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="cart-amt">Total amount : ₹{totalAmount}</div>
      {cart.length > 0 && (
        <button className="btn-checkout" onClick={checkOut}>
          Check out
        </button>
      )}
    </>
  );
};

export default Cart;

// import React from 'react';
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// const MyComponent = () => {
//   const notify = () => {
//     toast.success('Hello, this is a toast message!');
//   };

//   return (
//     <div>
//       <button onClick={notify}>Show Toast</button>
//       <ToastContainer />
//     </div>
//   );
// };

// export default MyComponent;
