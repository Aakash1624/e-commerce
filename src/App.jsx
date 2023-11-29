import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/nav';
import Home from './pages/home';
import Shop from './pages/shop';
import Contact from './pages/contact';
import Login from './singin/login/login';
import Cart from './pages/cart';

const App = () => {
  return (
    <main>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </main>
  );
};

export default App;
