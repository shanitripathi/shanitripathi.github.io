import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer id="contact">
      <div className="container">
        <h2>Get in Touch!</h2>
        <div className="links">
          <a
            href="https://www.linkedin.com/in/shani-tripathi-a6b94717b/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/shanitripathi" target="_blank">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://www.instagram.com/shani__tripathi/" target="_blank">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="mailto:shani.tripathi01@gmail.com">
            <i className="fas fa-envelope"></i>
          </a>
        </div>
        <span>
          <i className="fas fa-copyright"></i>
          {` Shani Tripathi - ${year}`}
        </span>
      </div>
    </footer>
  );
};

export default Footer;
