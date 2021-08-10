import React, { useState } from "react";
import axios from "axios";

const APItester = () => {
  const [name, setName] = useState("");
  const [data, setData] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const postToServer = () => {
    axios
      .get("http://localhost:5000/" + name)
      .then((res) => res.data)
      .then((result) => setData(result))
      .catch((error) => console.error(error));
    setName("");
  };
  return (
    <div>
      <h3>AXIOS HTTP REQUEST TEST</h3>
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
    </div>
  );
};

export default APItester;
