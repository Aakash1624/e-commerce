import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';
import Contact from './pages/contact';
import Login from './singin/login/login';
import Cart from './pages/cart';
import Root from './components/routes/root.route';
import CatPreview from './components/categories/catePreview';
import { ToastContainer } from 'react-toastify';

const App = () => {
  const [cart, setCart] = useState([]);

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root cart={cart} />,
      children: [
        {
          path: '',
          element: <Home />,
        },
        {
          path: '/shop',
          element: <Shop cart={cart} setCart={setCart} />,
        },
        {
          path: '/shop/:item',
          element: <CatPreview cart={cart} setCart={setCart} />,
        },
        {
          path: '/contact',
          element: <Contact />,
        },
        {
          path: '/cart',
          element: <Cart cart={cart} setCart={setCart} />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/myOrder',
          element: <Cart cart={cart} setCart={setCart} />,
        },
      ],
    },
  ]);
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
};

export default App;
