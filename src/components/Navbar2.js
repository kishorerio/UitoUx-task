// NavBar.js
import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom';
import './Navbar2.css';

const NavBar2 = () => {
  return (
    <nav className="navbar2">
      {/* <div className="navbar-logo">
        <Link to="/">
          <img
            src="path/to/your/logo.png"
            alt="Logo"
            className="logo-image"
          />
        </Link>
      </div> */}
      <div className="navbar-filter">
        <select className="category-filter">
          <option value="all">All Categories</option>
          <option value="electronics">Electronics</option>
          <option value="clothing">spare parts</option>
          <option value="home">two wheelers</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <ul className="navbar-menu2">
        <li className="navbar-item2">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item2">
          <Link to="/megamenu">MegaMenu</Link>
        </li>
        <li className="navbar-item2">
          <Link to="/shop">Shop</Link>
        </li>
        <li className="navbar-item2">
          <Link to="/blog">Blog</Link>
        </li>
        <li className="navbar-item2">
          <Link to="/account">Account</Link>
        </li>
        <li className="navbar-item2">
          <Link to="/pages">Pages</Link>
        </li>
        <li className="navbar-item2">
          <Link to="/buytheme">BuyTheme</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar2;
