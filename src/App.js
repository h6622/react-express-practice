import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

const App = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("api")
      .then(res => res.json())
      .then(data => setUsername(data.username));
  });

  return <>{username ? `Hello ${username}` : "Hello World"}</>;
};

export default App;
