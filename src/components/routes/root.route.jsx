import { Outlet } from 'react-router-dom';
import NavBar from '../navbar/nav';
import { useState } from 'react';
import Footer from '../footer/footer';

const Root = ({ cart }) => {
  return (
    <div>
      <NavBar cart={cart} />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Root;
