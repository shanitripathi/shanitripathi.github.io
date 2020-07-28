import React, { Component } from "react";
import Game from "../screens/Game";
import rectangle from "../images/rectangle.svg";

class GameLogic extends Component {
  state = {
    boardState: ["", "", "", "", "", "", "", "", ""],
    currentPlayer: "o",
  };

  handleClick = () => {
    let { boardState, currentPlayer } = this.state;
    if (boardState[2] === "") {
      boardState[2] = currentPlayer;
      this.setState({
        currentPlayer: currentPlayer === "o" ? "x" : "o",
      });
    }
    console.log(boardState);
  };
  render() {
    return (
      <Game boardState={this.state.boardState} handleClick={this.handleClick} />
    );
  }
}

export default GameLogic;
