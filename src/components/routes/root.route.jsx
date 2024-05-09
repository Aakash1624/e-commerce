import { Outlet } from 'react-router-dom';
import NavBar from '../navbar/nav';
import { useState } from 'react';

const Root = ({ cart }) => {
  return (
    <div>
      <NavBar cart={cart} />
      <Outlet />
    </div>
  );
};

export default Root;
