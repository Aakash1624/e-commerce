import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import './nav.css';
import { PiUserCircle } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';
import categories_data from '../../constants/products';

const NavBar = ({ cart }) => {
  return (
    <main className="nav-container">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTb8YoV8TYHM3Ot4Je-iMO1wnZS7L5gPbA-Bz1760IcYrHmI63R"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="nav-menu-container">
        <ul className="nav-menu-1">
          <li>
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/shop" className="link">
              SHOP
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              CONTACT US
            </Link>
          </li>
          <li>
            <Link to="/cart" className="link">
              <GiShoppingCart className="cart" />
              <span className="cart-count">{cart.length}</span>
            </Link>
          </li>
          <li>
            <Link to="/login" className="link">
              <PiUserCircle className="btn-login"/>
            </Link>
          </li>
        </ul>
      </div>
    </main>
  );
};

export default NavBar;
