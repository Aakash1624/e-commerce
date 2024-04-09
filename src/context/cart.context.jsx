import { createContext, useContext, useState } from 'react';
import MyContext from './myContext';

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);
  const value = {
    cartItems,
    setCartItems,
    cartCount,
    setCartCount,
    cartTotal,
    setCartTotal,
  };

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};


export default CartProvider;