import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Main from "./pages/main";
import Test from "./pages/test";
import Test2 from "./pages/test2";

const App = () => {
  return (
    <Router>
      <Route exact path="/" component={Main} />
      <Route path="/test" component={Test} />
      <Route path="/test2" component={Test2} />
    </Router>
  );
};

export default App;
