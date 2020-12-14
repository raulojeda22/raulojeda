import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home.js"
import Challenges from "./components/Challenges/Challenges.js"

class App extends Component {
  stopAnimation(e) {
    e.target.classList.add("stopAnimation");
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/challenges/" component={Challenges}></Route>
          <Route component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
