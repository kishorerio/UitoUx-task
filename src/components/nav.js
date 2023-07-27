import React from 'react';
import './NavBar.css';
import { Link } from 'react-router-dom'; // If you are using React Router for navigation

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-menu">
      <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/about">About Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/contact">Contact Us</Link>
        </li>
        <li className="navbar-item">
          <Link to="/store">Store Location</Link>
        </li>
        <li className="navbar-item">
          <Link to="/track">Track Order</Link>
        </li>
        <li className="navbar-item">
          <Link to="/blog">Blog</Link>
        </li>
      </ul>
    </nav>


 );
};

export default NavBar;
