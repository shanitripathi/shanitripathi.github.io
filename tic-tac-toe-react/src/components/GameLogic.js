import React, { Component } from "react";
import Game from "../screens/Game";
import rectangle from "../images/rectangle.svg";

class GameLogic extends Component {
  state = {
    boardState: [" ", " ", " ", " ", " ", " ", " ", " ", " "],
    currentPlayer: "o",
    result: "",
    undostatelist: [],
  };

  turndisplay = () => {
    return false;
  };

  undodisplay = () => {
    let { undostatelist } = this.state;
    if (undostatelist.length === 0) {
      document.getElementById("undo").style.display = "none";
    } else {
      document.getElementById("undo").style.display = "block";
    }
  };

  undo = () => {
    let { boardState, currentPlayer, result, undostatelist } = this.state;
    this.setState({
      currentPlayer: currentPlayer === "o" ? "x" : "o",
    });
    let tempstatelist = undostatelist.pop();
    let tempboardstate = boardState;
    tempboardstate[tempstatelist] = " ";
    this.setState({
      boardState: tempboardstate,
    });
    this.undodisplay();
    this.turndisplay();
  };

  winCheck = () => {
    let { boardState, currentPlayer, result } = this.state;
    function checkboard(boardstate) {
      return boardstate == "x" || boardstate == "o";
    }
    if (
      ((boardState[0] === "x" && boardState[1]) === "x" && boardState[2]) ===
        "x" ||
      ((boardState[0] === "x" && boardState[3]) === "x" && boardState[6]) ===
        "x" ||
      ((boardState[0] === "x" && boardState[4]) === "x" && boardState[8]) ===
        "x" ||
      ((boardState[1] === "x" && boardState[4]) === "x" && boardState[7]) ===
        "x" ||
      ((boardState[3] === "x" && boardState[4]) === "x" && boardState[6]) ===
        "x" ||
      ((boardState[3] === "x" && boardState[5]) === "x" && boardState[8]) ===
        "x" ||
      ((boardState[3] === "x" && boardState[4]) === "x" && boardState[5]) ===
        "x" ||
      ((boardState[6] === "x" && boardState[7]) === "x" && boardState[8]) ===
        "x"
    ) {
      document.getElementById("result").style.display = "flex";
      this.setState({
        result: "Player X Wins",
      });
    } else if (
      ((boardState[0] === "o" && boardState[1]) === "o" && boardState[2]) ===
        "o" ||
      ((boardState[0] === "o" && boardState[3]) === "o" && boardState[6]) ===
        "o" ||
      ((boardState[0] === "o" && boardState[4]) === "o" && boardState[8]) ===
        "o" ||
      ((boardState[1] === "o" && boardState[4]) === "o" && boardState[7]) ===
        "o" ||
      ((boardState[2] === "o" && boardState[4]) === "o" && boardState[6]) ===
        "o" ||
      ((boardState[3] === "o" && boardState[5]) === "o" && boardState[8]) ===
        "o" ||
      ((boardState[3] === "o" && boardState[4]) === "o" && boardState[5]) ===
        "o" ||
      ((boardState[6] === "o" && boardState[7]) === "o" && boardState[8]) ===
        "o"
    ) {
      document.getElementById("result").style.display = "flex";
      this.setState({
        result: "Player O Wins",
      });
    } else if (boardState.every(checkboard) == true) {
      document.getElementById("result").style.display = "flex";
      this.setState({
        result: "It is a Draw",
      });
    }
  };

  handleClick = (index) => {
    let { boardState, currentPlayer, result, undostatelist } = this.state;
    if (boardState[index] === " ") {
      boardState[index] = currentPlayer;
      this.setState({
        currentPlayer: currentPlayer === "o" ? "x" : "o",
      });
      let tempstatelist = undostatelist;
      tempstatelist.push(index);
      this.setState({
        undostatelist: tempstatelist,
      });
    }
    this.undodisplay();
    this.turndisplay();

    this.winCheck();
  };
  render() {
    return (
      <Game
        boardState={this.state.boardState}
        handleClick={this.handleClick}
        result={this.state.result}
        undo={this.undo}
      />
    );
  }
}

export default GameLogic;
