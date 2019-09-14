import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "./Components/navbar";
import EditExercise from "./Components/editExercise";
import CreateExercise from "./Components/createExercise";
import CreateUser from "./Components/createUser";
import ExercisesList from "./Components/exercisesList";

const App = () => {
  return (
    <Router>
      <div className={"container"}>
        <Navbar />
        <Route path={"/"} exact component={ExercisesList} />
        <Route path={"/edit/:id"} component={EditExercise} />
        <Route path={"/create"} component={CreateExercise} />
        <Route path={"/user"} component={CreateUser} />
        <Route />
      </div>
    </Router>
  );
};

export default App;
