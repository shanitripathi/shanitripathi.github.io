import React from "react";
import rectangle from "../images/rectangle.svg";
import oval from "../images/oval.svg";

const Loading = () => {
  return (
    <body>
      <div className="loading-container">
        <img src={rectangle} alt="" />
        <img src={oval} alt="" />
        <img src={rectangle} alt="" />
        <img src={oval} alt="" />
        <h1 className="loading-tag">Tic Tac Toe</h1>
      </div>
    </body>
  );
};

export default Loading;
