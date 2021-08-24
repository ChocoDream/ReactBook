import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="nav-logo">ReactBook</h1>
      <ul className="nav-link-items">
        <li className="nav-link-item">
          <Link to="/" className="nav-link-item-context">
            Home
          </Link>
        </li>
        <li className="nav-link-item">
          <Link to="/about" className="nav-link-item-context">
            About
          </Link>
      
        </li>
        <li> 
          <Link to="/credit" className="nav-link-item-context">
          Credit
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Nav;
