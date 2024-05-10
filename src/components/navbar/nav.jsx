import React, { useState } from 'react';
import { CiSearch } from 'react-icons/ci';
import './nav.css';
import { PiUserCircle } from 'react-icons/pi';
import { Link } from 'react-router-dom';
import { GiShoppingCart } from 'react-icons/gi';

const NavBar = ({ cart }) => {
  const [searchTerm, setSearchTerm] = useState('');

  // Assuming you have a list of products stored in a variable called 'products'
  const products = [
    { id: 1, name: 'Hat', description: 'A stylish hat' },
    { id: 2, name: 'Shoes', description: 'Comfortable shoes' },
    // Add more products as needed
  ];

  // Filter products based on search term
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <main className="nav-container">
      <div className="logo-container">
        <img
          src="https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcTb8YoV8TYHM3Ot4Je-iMO1wnZS7L5gPbA-Bz1760IcYrHmI63R"
          alt="logo"
          className="logo"
        />
      </div>
      <div className="search-container">
        <CiSearch className="search-icons" />
        <input
          type="search"
          name="search"
          id="search"
          className="search"
          placeholder="Search for products"
          value={searchTerm}
          onChange={handleInputChange}
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
              <PiUserCircle className="btn-login" />
            </Link>
          </li>
        </ul>
      </div>

      {/* {filteredProducts.map((product) => (
        <div key={product.id}>
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          
        </div>
      ))} */}
    </main>
  );
};

export default NavBar;
