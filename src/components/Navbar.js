import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <ul>
      <li><NavLink exact="true" to="/">Home</NavLink></li>
      <li><NavLink to="/about">About</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
