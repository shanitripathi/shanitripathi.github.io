import React, { Component } from "react";
import Game from "../screens/Game";
import rectangle from "../images/rectangle.svg";

class GameLogic extends Component {
  state = {
    marks: ["x", "o", "x", "o", "x", "o", "x", "o", "x"],
  };
  handleClick = (e) => {
    let tempid = e.target.id;
    let tempmark = this.state.marks.pop();
    e.target.innerText = tempmark;

    console.log(tempid);
  };
  render() {
    return <Game state={this.state.marks} handleClick={this.handleClick} />;
  }
}

export default GameLogic;
