import React, { Component } from "react";
import rectangle from "../images/rectangle.svg";
import oval from "../images/oval.svg";

class Game extends Component {
  render() {
    return (
      <div className="container game-container">
        <div class="row">
          <div class="col-12 col-lg-3 text-center text-lg-left">
            <a href="/"></a>
            <h2 className="game-tag">PLAYER</h2>
            <div className="game-turn">
              <img src={rectangle} alt="" />
              <div>
                <img src={rectangle} alt="" />
              </div>
            </div>
          </div>
          <div class="col-12 col-lg-6 ">
            <div className="game-line">
              <button
                className="btn-game"
                id="1"
                onClick={this.props.handleClick}
              ></button>
              <button className="btn-game" id="2"></button>
              <button className="btn-game" id="3"></button>
            </div>
            <div className="game-line">
              <button className="btn-game" id="4"></button>
              <button className="btn-game" id="5"></button>
              <button className="btn-game" id="6"></button>
            </div>
            <div className="game-line">
              <button className="btn-game" id="7"></button>
              <button className="btn-game" id="8"></button>
              <button className="btn-game" id="9"></button>
            </div>
          </div>
          <div class="col-12 col-lg-3 text-center text-lg-left">
            <h2 className="game-tag">PLAYER</h2>
            <div className="game-turn game-turn-2">
              <img src={oval} alt="" />
              <div>
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
