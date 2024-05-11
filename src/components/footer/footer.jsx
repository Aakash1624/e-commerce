import { React, useState } from 'react';
import { Link } from 'react-router-dom';
import './footer.css';
import { FaWhatsappSquare } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaTwitterSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-title">
        <h4>For Bussiness</h4>
      </div>
      <div className="footer-links">
        <div className="nav-menu-container">
          <ul className="nav-menu-1">
            <li>
              <Link to="/" className="footer-link">
                HOME
              </Link>
            </li>
            <li>
              <Link to="/shop" className="footer-link">
                SHOP
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                CONTACT US
              </Link>
            </li>
          </ul>
        </div>
        <div className="follow-us">
          <h5 className="follow-title">Follow Us:</h5>
          <div className="footer-contact">
            <a href="https://wa.me/6383017428" target="_blank">
              <div className="footer-icon">
                <FaWhatsappSquare className="footer-icons" />
              </div>
            </a>
            <a href="https://www.instagram.com/" target="_blank">
              <div className="footer-icon">
                <FaInstagramSquare className="footer-icons" />
              </div>
            </a>
            <a href="https://twitter.com/intent/tweet" target="_blank">
              <div className="footer-icon">
                <FaTwitterSquare className="footer-icons" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
