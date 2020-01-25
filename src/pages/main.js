import React, { useState, useEffect } from "react";

import Layout from "../components/layout";

const Main = () => {
  const [username, setUsername] = useState(null);

  useEffect(() => {
    fetch("api")
      .then(res => res.json())
      .then(data => setUsername(data.username));
  });

  return <Layout>{username ? `Hello ${username}` : "Hello World"}</Layout>;
};

export default Main;
