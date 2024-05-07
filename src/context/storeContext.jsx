// import { createContext, useContext, useState } from 'react';

// import { createContext, useState } from 'react';

// import categories_data from '../constants/products';

// const CartProvider = ({ children }) => {
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [cartTotal, setCartTotal] = useState(0);
//   const value = {
//     cartItems,
//     setCartItems,
//     cartCount,
//     setCartCount,
//     cartTotal,
//     setCartTotal,
//   };

//   return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
// };

// export default CartProvider;

// export const storeContext = createContext(null);

// const storeContextProvider = (prop) => {
//   const [cartItems, setCartItems] = useState({});

//   const addToCart = (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev + 1 }));
//     }
//   };

//   const removeFromCart = (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//   };

//   const contextValue = {
//     categories_data,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//   };

//   return (
//     <storeContextProvider.Provider value={contextValue}>
//       {prop.children}
//     </storeContextProvider.Provider>
//   );
// };
