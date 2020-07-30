import React, { Component } from "react";
import Game from "../screens/Game";
import rectangle from "../images/rectangle.svg";

class GameLogic extends Component {
  state = {
    boardState: ["", "", "", "", "", "", "", "", ""],
    currentPlayer: "o",
  };

  winCheck = () => {
    let { boardState, currentPlayer } = this.state;
    if (
      ((boardState[0] === boardState[1]) === boardState[2]) == "o" ||
      (boardState[0] === boardState[3]) === boardState[6] ||
      (boardState[0] === boardState[4]) === boardState[8] ||
      (boardState[1] === boardState[4]) === boardState[7] ||
      (boardState[3] === boardState[4]) === boardState[6] ||
      (boardState[3] === boardState[5]) === boardState[8] ||
      (boardState[3] === boardState[4]) === boardState[5] ||
      (boardState[6] === boardState[7]) === boardState[8]
    ) {
      console.log("Player Wins");
    }
    // else if (!("" in boardState)) {
    //   console.log("It is a draw");
    // }
  };

  handleClick = (index) => {
    let { boardState, currentPlayer } = this.state;
    if (boardState[index] === "") {
      boardState[index] = currentPlayer;
      this.setState({
        currentPlayer: currentPlayer === "o" ? "x" : "o",
      });
    }
    console.log(boardState);
    this.winCheck();
  };
  render() {
    return (
      <Game boardState={this.state.boardState} handleClick={this.handleClick} />
    );
  }
}

export default GameLogic;
