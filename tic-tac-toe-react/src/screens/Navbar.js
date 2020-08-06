import React from "react";
import logo from "../images/logo.svg";
import Home from "./Home";

const Navbar = () => {
  return (
    <body>
      <div className="container navbar-container">
        <div className="icons-container">
          <img src={logo} alt="" className="logo" />
        </div>
      </div>
    </body>
  );
};

export default Navbar;
