import React from 'react';
import { CiSearch } from 'react-icons/ci';
import './nav.css';
import { PiUserCircle } from 'react-icons/pi';
import { Link, Routes, Route } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';

const NavBar = () => {
  return (
    <main className="nav-container">
      <div className="logo-container">
        <img src="src\assets\images\flipkart.svg" alt="logo" className="logo" />
      </div>
      <div className="search-container">
        <CiSearch className="search-icons" />
        <input
          type="search"
          name="search"
          id="search"
          className="search"
          placeholder="Search for products"
        />
      </div>
      <div className="nav-menu-container">
        <ul className="nav-menu-1">
          <li>
            <Link to="/" className="link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/shop" className="link">
              Shop
            </Link>
          </li>
          <li>
            <Link to="/contact" className="link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/cart" className="link">
              <GiShoppingCart className="cart" />
            </Link>
          </li>
        </ul>
        <div className="nav-menu-2">
          <PiUserCircle className="profile" />
          <li>
            <Link to="/login" className="link">
              <button className="btn-login">Login</button>
            </Link>
          </li>
        </div>
      </div>
    </main>
  );
};

export default NavBar;
