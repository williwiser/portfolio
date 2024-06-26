import "../sn1.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { motion } from "framer-motion";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Section1() {
  return (
    <>
      <section id="hero-sn">
        <div className="wrapper">
          <motion.div
            initial="initialState"
            animate="animateState"
            exit="exitState"
            transition={{
              type: "tween",
              duration: 1.5,
              easeIn: 0.5,
            }}
            variants={{
              initialState: {
                opacity: 0,
              },
              animateState: {
                opacity: 100,
              },
              exitState: {
                opacity: 100,
              },
            }}
          >
            <div className="intro">
              <h1 id="intro-name">Hi, I'm William</h1>
              <h3 id="intro-role">A Full Stack Developer</h3>
              <p id="intro-skills">
                PostgreSQL, Express, React, Node.js (PERN Stack)
              </p>
              <p id="selling-point">
                I build fast, responsive and high quality web applications-{" "}
                <br />
                meticulously paying attention to small details.
              </p>
              <a className="btn" href="#sn-5" id="contact">
                Contact Me
              </a>
            </div>
          </motion.div>
          <div className="socials">
            <a href="https://www.linkedin.com/in/william-wani-a47316168/">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
            <a href="https://github.com/williwiser/">
              <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section1;
