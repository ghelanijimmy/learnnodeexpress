import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <Router>
      <Route path={"/"} exact component={() => <div>HOME</div>} />
      <Route path={"/edit/:id"} component={() => <div>EDIT</div>} />
      <Route path={"/create"} component={() => <div>CREATE</div>} />
      <Route path={"/user"} component={() => <div>USER</div>} />
      <Route />
    </Router>
  );
};

export default App;
