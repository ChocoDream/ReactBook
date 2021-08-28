import React from "react";
import { Link } from "react-router-dom";
import { Settings } from "react-feather";

import avatarImg from "@public/avatar.png";

import "./styles.scss";

const Nav = () => {
  return (
    <div className="nav">
      <h1 className="nav-logo">
        <Link to="/">ReactBook</Link>
      </h1>
      <div className="navbar">
        <div className="avatar">
          <img className="avatar-icon" src={avatarImg} alt="User's Avatar" />
          <p className="avatar-username">Joan Doe</p>
        </div>
        <div className="navbar-settings">
          <Settings className="navbar-settings-icon" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
