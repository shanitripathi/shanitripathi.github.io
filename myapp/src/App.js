import React, { Component } from "react";
import Ninjas from "./Ninjas";
import AddNinja from "./AddNinja";

class App extends Component {
  state = {
    ninjas: [
      { name: "shani", age: 24, id: 1 },
      { name: "tania", age: 30, id: 2 },
      { name: "naruto", age: 24, id: 3 },
    ],
  };

  addNinja = (ninja) => {
    ninja.id = Math.floor(Math.random() * 10);
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas,
    });
  };

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter((ninja) => {
      return ninja.id != id;
    });
    this.setState({
      ninjas: ninjas,
    });
  };

  render() {
    return (
      <div className="App">
        <h1>Hello welcome to react</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja} />
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;
