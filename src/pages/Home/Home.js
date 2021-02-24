import React from "react";
import coverSmall from "../../img/coverSmall.jpg";
import Agency from "../../img/Agency.png";
import Days from "../../img/Days.png";
import EightGates from "../../img/Eight-Gates.png";
import Hospital from "../../img/Hospital.png";
import Media from "../../img/Media.png";
import Ruben from "../../img/Ruben.png";
import { motion } from "framer-motion";
import {
  slide,
  fadeIn,
  slideLeft,
  fadeRight,
  useScroll,
  line,
  swipe,
  skillColor,
  nothing,
  arrow,
} from "../../animations";
import { Link } from "react-router-dom";
import Project from "../../components/Project";
import Footer from "../../components/Footer";

export const allProjects = [
  { name: EightGates, link: "https://peaceful-meninsky-20aa98.netlify.app/" },
  { name: Media, link: "https://tender-kare-87b4ca.netlify.app/" },
  {
    name: Hospital,
    link: "https://shanitripathi.github.io/assignment7/index.html",
  },
  { name: Days, link: "https://shanitripathi.github.io/days/index.html" },
  {
    name: Agency,
    link: "https://shanitripathi.github.io/assignment6/index.html",
  },
  {
    name: Ruben,
    link: "https://shanitripathi.github.io/assignment5/index.html",
  },
];
export const projects = [
  { name: EightGates, link: "https://peaceful-meninsky-20aa98.netlify.app/" },
  { name: Media, link: "https://tender-kare-87b4ca.netlify.app/" },
  {
    name: Hospital,
    link: "https://shanitripathi.github.io/assignment7/index.html",
  },
];

export default () => {
  const [element, controls] = useScroll();
  const [element1, controls1] = useScroll();
  const [element2, controls2] = useScroll();
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className="home">
      <motion.section className="home-section" id="about">
        <motion.div
          variants={slide}
          initial="hidden"
          animate="visible"
          className="blue-shadow d-none d-md-block"
        ></motion.div>
        <div className="container cover-container">
          <div className="row">
            <motion.div
              variants={fadeRight}
              initial="hidden"
              animate="visible"
              className="col-12 col-md-6 cover-title-col text-left"
            >
              <div className="title-wrap">
                <img
                  className="img-small d-block d-md-none"
                  src={coverSmall}
                  alt=""
                />
                <h1>Shani Tripathi,</h1>
                <h1>
                  Front-End <span className="h1-shadow">Developer</span>
                </h1>
              </div>
              <p className="about-para">
                I'm a Front-end developer based in Dublin with a strong
                educational background in Computer Science. I started creating
                web designs using HTML and CSS last year and since then I never
                looked back. I love to learn new things every day and keep up
                with the new technologies. Apart from that, I share a keen
                interest in Photography which helps me to stay in the creative
                block. You can find my work in the Projects section.
              </p>

              <motion.div className="arrow-container">
                <motion.i
                  variants={arrow}
                  animate="visible"
                  initial="hidden"
                  className="fas fa-long-arrow-alt-down"
                ></motion.i>
              </motion.div>
            </motion.div>
            <div className="col-12 col-md-6 img-cover-col text-right d-none d-md-block">
              <motion.div
                variants={fadeIn}
                initial="hidden"
                animate="visible"
                className="img-cover-container"
              >
                <motion.div
                  variants={slideLeft}
                  className="slide-box"
                ></motion.div>
                <motion.img className="img-cover" src={coverSmall} alt="" />
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>
      <section className="project-section" id="projects">
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
              Work
            </motion.h2>
          </div>
          <div className="row">
            {projects.map((project) => {
              return (
                <Project
                  key={project.link}
                  img={project.name}
                  link={project.link}
                />
              );
            })}
            <Link className="view-all-link" to="/projects">
              View All Projects
            </Link>
          </div>
        </motion.div>
      </section>
      <motion.section
        ref={element1}
        variants={nothing}
        initial="hidden"
        animate={controls1}
        className="skills-section"
        id="skills"
      >
        <div className="container skills-container">
          <div className="section-title-wrapper">
            <motion.div
              variants={line}
              initial="hidden"
              animate={controls1}
              className="section-title-line"
            ></motion.div>
            <motion.h2
              variants={fadeRight}
              initial="hidden"
              animate={controls1}
              className="project-header"
            >
              Skills
            </motion.h2>
          </div>
          <motion.div className="row skills-row">
            <div className="skill-col col-12 col-md-4">
              <motion.span variants={skillColor} className="skill">
                HTML/CSS
                <motion.div
                  variants={swipe(0)}
                  className="skill-shadow"
                ></motion.div>
              </motion.span>
              <div />
            </div>
            <div className="skill-col col-12 col-md-4">
              <motion.span variants={skillColor} className="skill">
                JavaScript
                <motion.div
                  variants={swipe(0)}
                  className="skill-shadow"
                ></motion.div>
              </motion.span>
              <div />
            </div>
            <div className="skill-col col-12 col-md-4">
              <motion.span variants={skillColor} className="skill">
                React
                <motion.div
                  variants={swipe(0)}
                  className="skill-shadow"
                ></motion.div>
              </motion.span>
              <div />
            </div>
            <div className="skill-col col-12 col-md-4">
              <motion.span variants={skillColor} className="skill">
                Redux
                <motion.div
                  variants={swipe(0)}
                  className="skill-shadow"
                ></motion.div>
              </motion.span>
              <div />
            </div>
            <div className="skill-col col-12 col-md-4">
              <motion.span variants={skillColor} className="skill">
                Responsive Design
                <motion.div
                  variants={swipe(0)}
                  className="skill-shadow"
                ></motion.div>
              </motion.span>
              <div />
            </div>
            <div className="skill-col col-12 col-md-4">
              <motion.span variants={skillColor} className="skill">
                GIT
                <motion.div
                  variants={swipe(50)}
                  className="skill-shadow"
                ></motion.div>
              </motion.span>
              <div />
            </div>
            <div className="skill-col col-12 col-md-4">
              <motion.span variants={skillColor} className="skill">
                Bootstrap
                <motion.div
                  variants={swipe(10)}
                  className="skill-shadow"
                ></motion.div>
              </motion.span>
              <div />
            </div>
            <div className="skill-col col-12 col-md-4">
              <motion.span variants={skillColor} className="skill">
                SCSS
                <motion.div
                  variants={swipe(0)}
                  className="skill-shadow"
                ></motion.div>
              </motion.span>
              <div />
            </div>
          </motion.div>
        </div>
      </motion.section>
      <Footer />
    </div>
  );
};
