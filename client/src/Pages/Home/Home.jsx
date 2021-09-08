import React from "react";
import { Link } from "react-router-dom";

import "./styles.scss";

const Home = () => {
  return (
    <div className="home">
      <p>Hello world from Home Page</p>
      <Link to="/about">About</Link>
      <Link to="/credit">Credits</Link>
    </div>
  );
};

export default Home;
