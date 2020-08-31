import React, {Component} from "react";
import rectangle from "../images/rectangle.svg";
import oval from "../images/oval.svg";
<<<<<<< HEAD
import { Link } from "react-router-dom";
=======
import Board from "../components/game/Board";

>>>>>>> a0755d6602eee7ea91cee32fb2376f46788f7e32

class Game extends Component {
<<<<<<< HEAD
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
=======

    state = {
        currentPlayer: 'o',
        boardState: ['', 'o', 'x', '', 'o', 'x', '', 'o', 'x'],
        winner: null,   // 'o', 'x'
    }

    checkWinCondition = () => {
        let {boardState, currentPlayer} = this.state;
        // logic for winning condition.
        // work only on state;
        // ['', 'o', 'x', '', 'o', 'x', '', 'o', 'x']
        // let condition1 = boardState[0] === boardState[1] === boardState[2];
        // let condition2 = boardState[0] === boardState[1] === boardState[2];
        // let condition3 = boardState[0] === boardState[1] === boardState[2];
        // let condition4 = boardState[0] === boardState[1] === boardState[2];
        // let condition5 = boardState[0] === boardState[1] === boardState[2];
        // let condition6 = boardState[0] === boardState[1] === boardState[2];
        // let condition7 = boardState[0] === boardState[1] === boardState[2];
        // let condition8 = boardState[0] === boardState[1] === boardState[2];
        return false;
    };

    handleCellClick = (cellIndex) => {
        let {boardState, currentPlayer} = this.state;

        if (boardState[cellIndex] === '') {
            boardState[cellIndex] = currentPlayer;
            this.setState({boardState, currentPlayer: currentPlayer === 'o' ? 'x' : 'o'});
            console.warn(boardState);
        }
        //
        // if (this.checkWinCondition()) {
        //     this.setState({winner: currentPlayer});
        // }
        // console.warn(cellIndex);
    }

    render() {
        let {boardState, currentPlayer, winner} = this.state;
        // <Player type="x" active={currentPlayer === 'x'}/>

        return (
            <div className="container game-container">
                <div className="row">
                    <div className="col-12 col-lg-3 text-center text-lg-left">
                        <a href="/"/>
                        <h2 className="game-tag">PLAYER</h2>
                        <div className="game-turn">
                            <img src={rectangle} alt=""/>
                            <div>
                                <img src={rectangle} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-6 ">
                        {
                            !winner &&
                            <Board boardState={boardState}
                                   handleCellClick={this.handleCellClick}/>
                        }
                    </div>
                    <div className="col-12 col-lg-3 text-center text-lg-left">
                        <h2 className="game-tag">PLAYER</h2>
                        <div className="game-turn game-turn-2">
                            <img src={oval} alt=""/>
                            <div>
                                <img src={oval} alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
>>>>>>> eb38a84f2731e900e8a004f149003429e30a8390
            </div>
        );
    }
}

export default Game;
