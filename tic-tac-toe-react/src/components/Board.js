import React, { Component } from "react";
import Result from "./Result";

class Board extends React.Component {
  render() {
    return (
      <body>
        <h1 className="text-center bg-light">TIC-TAC-TOE</h1>
        <div className="container mb-2">
          <div className="line-1 line">
            <div className="left">
              <button
                onClick={this.props.mark}
                className="cell"
                id="1"
              ></button>
            </div>
            <div className="middle">
              <button
                onClick={this.props.mark}
                className="cell"
                id="2"
              ></button>
            </div>
            <div className="right">
              <button
                onClick={this.props.mark}
                className="cell"
                id="3"
              ></button>
            </div>
          </div>
          <div className="line-2 line">
            <div className="left">
              <button
                onClick={this.props.mark}
                className="cell"
                id="4"
              ></button>
            </div>
            <div className="middle">
              <button
                onClick={this.props.mark}
                className="cell"
                id="5"
              ></button>
            </div>
            <div className="right">
              <button
                onClick={this.props.mark}
                className="cell"
                id="6"
              ></button>
            </div>
          </div>
          <div className="line-3 line">
            <div className="left">
              <button
                onClick={this.props.mark}
                className="cell"
                id="7"
              ></button>
            </div>
            <div className="middle">
              <button
                onClick={this.props.mark}
                className="cell"
                id="8"
              ></button>
            </div>
            <div className="right">
              <button
                onClick={this.props.mark}
                className="cell"
                id="9"
              ></button>
            </div>
          </div>
        </div>
        <div>
          <button id="undobutton" onClick={this.props.undo}>
            <h6 className="p-0 m-0">UNDO</h6>
          </button>
        </div>
        <h1 className="demo"></h1>
        <Result />
      </body>
    );
  }
}

export default Board;
