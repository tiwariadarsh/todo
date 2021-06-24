import "./App.css";
import React from "react";
import Navbar from "./components/Navbar";
import Todos from "./components/Todos";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Login from "./components/Login";
import Complete from "./components/Complete";

export default function App() {
  return (
    <div>
      <Router>
        <Navbar title="To-Do List" />
        <Switch>
          <Route exact path="/">
            <Todos />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/complete">
            <Complete />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
