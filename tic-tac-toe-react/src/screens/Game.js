import React, { Component } from "react";
import rectangle from "../images/rectangle.svg";
import oval from "../images/oval.svg";
import { Link } from "react-router-dom";

class Game extends Component {
  boardMap = (id) => {
    let { boardState, handleClick } = this.props;
    if (boardState[id] === "") {
      return <h1></h1>;
    } else if (boardState[id] === "o") {
      return (
        <div className="shape-container-o">
          <img src={oval} alt="" />
        </div>
      );
    } else if (boardState[id] === "x") {
      return (
        <div className="shape-container-x">
          <img src={rectangle} alt="" />
        </div>
      );
    }
  };

  render() {
    let { boardState, handleClick, result, undo } = this.props;
    return (
      <div className="container game-container">
        <div className="draw-window" id="result">
          <h1>{result}</h1>
          {/* <button className="btn btn-primary btn-restart" onClick={this.reload}>
            Restart Game
          </button> */}
          <Link className="btn btn-primary btn-restart" to="/">
            Restart Game
          </Link>
        </div>
        <div id="undo">
          <button className="btn-primary btn" onClick={undo}>
            Undo
          </button>
        </div>
        <div class="row">
          <div class="col-12 col-lg-3 text-center text-lg-left">
            <a href="/"></a>
            <h2 className="game-tag">PLAYER</h2>
            <div className="game-turn">
              <div id="td1">
                <img src={rectangle} alt="" />
              </div>

              <div id="td2">
                <img src={rectangle} alt="" />
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 ">
            <div className="game-line">
              <button
                className="btn-game"
                id="1"
                onClick={() => {
                  handleClick(0);
                }}
              >
                {this.boardMap(0)}
              </button>
              <button
                className="btn-game"
                id="2"
                onClick={() => {
                  handleClick(1);
                }}
              >
                {this.boardMap(1)}
              </button>
              <button
                className="btn-game"
                id="3"
                onClick={() => {
                  handleClick(2);
                }}
              >
                {this.boardMap(2)}
              </button>
            </div>
            <div className="game-line">
              <button
                className="btn-game"
                id="4"
                onClick={() => {
                  handleClick(3);
                }}
              >
                {this.boardMap(3)}
              </button>
              <button
                className="btn-game"
                id="5"
                onClick={() => {
                  handleClick(4);
                }}
              >
                {this.boardMap(4)}
              </button>
              <button
                className="btn-game"
                id="6"
                onClick={() => {
                  handleClick(5);
                }}
              >
                {this.boardMap(5)}
              </button>
            </div>
            <div className="game-line">
              <button
                className="btn-game"
                id="7"
                onClick={() => {
                  handleClick(6);
                }}
              >
                {this.boardMap(6)}
              </button>
              <button
                className="btn-game"
                id="8"
                onClick={() => {
                  handleClick(7);
                }}
              >
                {this.boardMap(7)}
              </button>
              <button
                className="btn-game"
                id="9"
                onClick={() => {
                  handleClick(8);
                }}
              >
                {this.boardMap(8)}
              </button>
            </div>
          </div>
          <div class="col-12 col-lg-3 text-center text-lg-right">
            <h2 className="game-tag">PLAYER</h2>
            <div className="game-turn game-turn-2">
              <img id="tdo1" src={oval} alt="" />
              <div id="tdo2">
                <img src={oval} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
