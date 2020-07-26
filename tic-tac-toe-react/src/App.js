import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./screens/Home";
import Navbar from "./screens/Navbar";
import { BrowserRouter, Route } from "react-router-dom";
import Loading from "./screens/Loading";
import Game from "./screens/Game";
import GameLogic from "./components/GameLogic";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* <Route exact path="/" component={Game} />
          <Route path="/loading" component={Loading} /> */}
          <GameLogic />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
