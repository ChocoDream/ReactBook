import React, { useState, useEffect } from "react";
import axios from "axios";
const Home = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [data, setData] = useState("")

  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const postToServer = () => {
    axios
      .get("http://127.0.0.1:5000/" + name)
      .then((res) => res.data)
      .then((result) => setData(result))
      .catch((error) => console.error(error));
    setName("")
  };

  return (
    <div>
      <header>
        <p>Page has been opened for {count} seconds.</p>
      </header>
      <h3>AXIOS HTTP Request test</h3>
      <input type="text" onChange={handleChange} placeholder="Type your name" value={name} />
      <button onClick={postToServer}>Post to Backend</button>
      {data && <p>Recieved from Server: {data}</p>}
    </div>
  );
};

export default Home;
