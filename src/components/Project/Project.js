import React, { useState } from "react";
import { motion } from "framer-motion";
import { projectFade } from "../../animations";

export default ({ img, link }) => {
  const [show, setShow] = useState(false);

  return (
    <div className="col-12 col-md-4 project">
      <a href={link} target="_blank">
        <div className="project-wrapper">
          <div className="project-shadow"></div>
          <img src={img} alt="" />
        </div>
      </a>
    </div>
  );
};
