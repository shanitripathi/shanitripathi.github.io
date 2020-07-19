import React, { Component } from "react";

class Home extends React.Component {
  handleClick = (e) => {
    e.target.innerHTML = this.props.marks[0];
  };
  render() {
    return (
      <div className="container mb-2">
        <div className="line-1 line">
          <div className="left">
            <button className="cell" id="1" onClick={this.handleClick}></button>
          </div>
          <div className="middle">
            <button className="cell" id="2"></button>
          </div>
          <div className="right">
            <button className="cell" id="3"></button>
          </div>
        </div>
        <div className="line-2 line">
          <div className="left">
            <button className="cell" id="4"></button>
          </div>
          <div className="middle">
            <button className="cell" id="5"></button>
          </div>
          <div className="right">
            <button className="cell" id="6"></button>
          </div>
        </div>
        <div className="line-3 line">
          <div className="left">
            <button className="cell" id="7"></button>
          </div>
          <div className="middle">
            <button className="cell" id="8"></button>
          </div>
          <div className="right">
            <button className="cell" id="9"></button>
          </div>
        </div>
        <div>
          <button id="undobutton">
            <h6 className="p-0 m-0">UNDO</h6>
          </button>
        </div>
        <h1 className="demo"></h1>
      </div>
    );
  }
}

export default Home;
