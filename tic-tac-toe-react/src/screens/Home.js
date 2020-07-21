import React, { Component } from "react";
import Board from "../components/Board";

class Home extends Component {
  state = {
    marklist: ["x", "o", "x", "o", "x", "o", "x", "o", "x"],
    undolist: [],
    idlist: [],
  };

  undodisplay = () => {
    if (this.state.idlist.length > 0) {
      document.getElementById("undobutton").style.display = "block";
    } else {
      document.getElementById("undobutton").style.display = "none";
    }
  };
  undo = () => {
    let tempid = this.state.idlist.pop();
    let newmarklist = [
      ...this.state.marklist,
      document.getElementById(tempid).innerText,
    ];
    this.setState({
      marklist: newmarklist,
    });
    document.getElementById(tempid).innerText = "";
    this.undodisplay();
  };

  wincheck = () => {
    if (
      (document.getElementById(1).innerText == "x" &&
        document.getElementById(2).innerText == "x" &&
        document.getElementById(3).innerText == "x") ||
      (document.getElementById(1).innerText == "x" &&
        document.getElementById(4).innerText == "x" &&
        document.getElementById(7).innerText == "x") ||
      (document.getElementById(1).innerText == "x" &&
        document.getElementById(5).innerText == "x" &&
        document.getElementById(9).innerText == "x") ||
      (document.getElementById(2).innerText == "x" &&
        document.getElementById(5).innerText == "x" &&
        document.getElementById(8).innerText == "x") ||
      (document.getElementById(3).innerText == "x" &&
        document.getElementById(6).innerText == "x" &&
        document.getElementById(9).innerText == "x") ||
      (document.getElementById(4).innerText == "x" &&
        document.getElementById(5).innerText == "x" &&
        document.getElementById(6).innerText == "x") ||
      (document.getElementById(7).innerText == "x" &&
        document.getElementById(8).innerText == "x" &&
        document.getElementById(9).innerText == "x") ||
      (document.getElementById(7).innerText == "x" &&
        document.getElementById(5).innerText == "x" &&
        document.getElementById(3).innerText == "x")
    ) {
      document.getElementById("wintext").innerText = "Player X Wins";
      document.getElementById("restartwindow").style.display = "flex";
      console.log("player 1");
    } else if (
      (document.getElementById(1).innerText == "o" &&
        document.getElementById(2).innerText == "o" &&
        document.getElementById(3).innerText == "o") ||
      (document.getElementById(1).innerText == "o" &&
        document.getElementById(4).innerText == "o" &&
        document.getElementById(7).innerText == "o") ||
      (document.getElementById(1).innerText == "o" &&
        document.getElementById(5).innerText == "o" &&
        document.getElementById(9).innerText == "o") ||
      (document.getElementById(2).innerText == "o" &&
        document.getElementById(5).innerText == "o" &&
        document.getElementById(8).innerText == "o") ||
      (document.getElementById(3).innerText == "o" &&
        document.getElementById(6).innerText == "o" &&
        document.getElementById(9).innerText == "o") ||
      (document.getElementById(4).innerText == "o" &&
        document.getElementById(5).innerText == "o" &&
        document.getElementById(6).innerText == "o") ||
      (document.getElementById(7).innerText == "o" &&
        document.getElementById(8).innerText == "o" &&
        document.getElementById(9).innerText == "o") ||
      (document.getElementById(7).innerText == "o" &&
        document.getElementById(5).innerText == "o" &&
        document.getElementById(3).innerText == "o")
    ) {
      document.getElementById("wintext").innerText = "Player O Wins";
      document.getElementById("restartwindow").style.display = "flex";
      console.log("2");
    } else {
      if (this.state.marklist.length == 0) {
        document.getElementById("wintext").innerText = "It's a draw";
        document.getElementById("restartwindow").style.display = "flex";
      }
    }
  };
  mark = (e, id) => {
    if (this.state.marklist.length > 0 && e.target.innerText == "") {
      //   let newidlist = [...this.state.idlist, e.target.id];
      //   this.setState({
      //     idlist: newidlist,
      //   });
      this.state.idlist.push(e.target.id);
      let temp = this.state.marklist.pop();
      let newundolist = [...this.state.undolist, temp];
      this.setState({
        undolist: newundolist,
      });
      e.target.innerText = temp;
    }
    this.wincheck();
    this.undodisplay();
  };
  render() {
    return (
      <div>
        <Board
          marklist={this.state.marklist}
          mark={this.mark}
          undo={this.undo}
        />
      </div>
    );
  }
}

export default Home;
