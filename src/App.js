import React from "react";
import Home from "./component/Home";
import Navbar from "./component/Navbar";
import About from "./component/About";
import Exercise from "./component/Exercise";
import List from "./component/List";
import Update from "./component/Update";
import Error from "./component/Error";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/exercise" component={Exercise} />
          <Route exact path="/list" component={List} />
          <Route exact path="/update/:id" component={Update} />
          <Route component={Error} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
