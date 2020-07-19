import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./components/Home";

class App extends React.Component {
  state = {
    marks: ["x", "o", "x", "o", "x", "o", "x", "o", "x"],
  };
  render() {
    return (
      <div className="App">
        <Home marks={this.state.marks} />
      </div>
    );
  }
}

export default App;
