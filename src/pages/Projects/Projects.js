import React, { useEffect } from "react";
import Project from "../../components/Project";
import { motion } from "framer-motion";
import { allProjects } from "../Home/Home";
import Footer from "../../components/Footer";

import { fadeIn, line, fadeRight, useScroll } from "../../animations";

export default () => {
  const [element, controls] = useScroll();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="project-section project-section-all" id="projects">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 0.5 }}
          className="container project-container"
        >
          <div ref={element} className="section-title-wrapper">
            <motion.div
              variants={line}
              initial="hidden"
              animate={controls}
              className="section-title-line"
            ></motion.div>
            <motion.h2
              variants={fadeRight}
              initial="hidden"
              animate={controls}
              className="project-header"
            >
              Projects
            </motion.h2>
          </div>
          <div className="row">
            {allProjects.map((project) => {
              return (
                <Project
                  key={project.link}
                  img={project.name}
                  link={project.link}
                />
              );
            })}
          </div>
        </motion.div>
      </section>
      <Footer />
    </>
  );
};
