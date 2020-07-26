import React, {Component} from "react";
import rectangle from "../images/rectangle.svg";
import oval from "../images/oval.svg";
import Board from "../components/game/Board";


class Game extends Component {

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
            </div>
        );
    }
}

export default Game;
