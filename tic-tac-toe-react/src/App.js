import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Navbar from "./screens/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Loading from "./screens/Loading";
import Game from "./screens/Game";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />

          <Route exact path="/" component={Home} />
          <Route path="/loading" component={Loading} />
          <Route path="/game" component={GameLogic} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
