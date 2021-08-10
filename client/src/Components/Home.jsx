import React, { useState, useEffect } from "react";
import axios from "axios";
import logo from "../../public/logo.svg";
import "./Home.css";

const Home = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const postToServer = () => {
    axios
      .get("localhost:5000/" + name)
      .then((res) => res.data)
      .then((result) => setData(result))
      .catch((error) => console.error(error));
    setName("");
  };

  return (
    <div className="home">
      <header className="home-header">
        <img src={logo} alt="rotating react logo" className="home-logo" />
        <p>Page has been opened for {count} seconds.</p>
        <h3>AXIOS HTTP Request test</h3>
        <div>
          <input
            type="text"
            onChange={handleChange}
            placeholder="Type your name"
            value={name}
          />
          <button onClick={postToServer}>Post to Backend</button>
          {data && (
            <p className="dataFromServer">Recieved from Backend: {data}</p>
          )}
        </div>
      </header>
    </div>
  );
};

export default Home;
