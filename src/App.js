import "./App.css";
import React, { useState , useEffect} from "react";
import Navbarx from "./components/Navbar";
import Todos from "./components/Todos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Complete from "./components/Complete";

export default function App() {
let intitial1;
  if (localStorage.getItem("com") === null) {
    intitial1 = [];
  } else {
    intitial1 = JSON.parse(localStorage.getItem("com"));
  }
  const [com, setCom] = useState(intitial1);
  useEffect(() => {
    localStorage.setItem("com", JSON.stringify(com));
  }, [com]);

  return (
    <div>
      <Router>
        <Navbarx title="To-Do List" />
        <Switch>
          <Route exact path="/">
            <Todos setCom={setCom} com={com} />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/complete">
            <Complete com={com} setCom={setCom} />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
