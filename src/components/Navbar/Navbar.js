import React, { useState } from "react";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";
import {
  burgerLine1,
  burgerLine2,
  burgerLine3,
  navSlide,
} from "../../animations";
import { Link } from "react-router-dom";

export default () => {
  const [toggle, setToggle] = useState(false);
  const location = useLocation();
  const linkSetter = (link) => {
    return location.pathname === "/" ? `#${link}` : `/#${link}`;
  };
  return (
    <nav className="navbar">
      <div className="container-fluid navbar-container">
        <Link className="navbrand" to="/">
          Shani.
        </Link>
        <button
          onClick={() => {
            setToggle(!toggle);
          }}
          className="burger"
        >
          <motion.div
            variants={burgerLine1}
            initial="hidden"
            animate={toggle ? "visible" : ""}
            className="line line1"
          ></motion.div>
          <motion.div
            variants={burgerLine2}
            initial="hidden"
            animate={toggle ? "visible" : ""}
            className="line line2"
          ></motion.div>
          <motion.div
            variants={burgerLine3}
            initial="hidden"
            animate={toggle ? "visible" : ""}
            className="line line3"
          ></motion.div>
        </button>
        <motion.div
          variants={navSlide}
          animate={toggle ? "visible" : ""}
          className="navlist"
        >
          <div className="nav-items">
            <Link
              onClick={() => {
                setToggle(!toggle);
              }}
              to="/"
            >
              About
            </Link>
            <a
              onClick={() => {
                setToggle(!toggle);
              }}
              href={linkSetter("projects")}
            >
              Projects
            </a>
            <a
              onClick={() => {
                setToggle(!toggle);
              }}
              href={linkSetter("skills")}
            >
              Skills
            </a>
            <a
              onClick={() => {
                setToggle(!toggle);
              }}
              href="#contact"
            >
              Contact
            </a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};
