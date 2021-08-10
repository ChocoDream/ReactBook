import React, { useState, useEffect } from "react";

import "./styles.scss";
import logo from "@public/logo.svg";

const Home = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} alt="Spinning React Logo" className="home-logo" />
        <p>Page has been opened for {count} seconds</p>
      </header>
    </div>
  );
};

export default Home;
