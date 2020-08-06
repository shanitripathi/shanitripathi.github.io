import React from "react";
import rectangle from "../images/rectangle.svg";
import oval from "../images/oval.svg";
import { Link, NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="container home-container">
      <div class="row">
        <div class="col text-center text-lg-left">
          <h1 className="title-tag">Let's Play</h1>
          <h1 className="title-tag">Tic-Tac-Toe</h1>
          <Link className="btn btn-primary" to="/loading">
            Start Game
          </Link>
        </div>
        <div class="col d-none d-lg-block">
          <div className="line">
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="line">
            <div></div>
            <div className="shape-container shape-container-2">
              <img src={oval} alt="" />
            </div>
            <div></div>
          </div>
          <div className="line">
            <div className="shape-container">
              <img src={rectangle} alt="" />
            </div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
