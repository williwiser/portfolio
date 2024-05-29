import "../sn3.css";
import htmlLogo from "../assets/html5_logo.png";
import jsLogo from "../assets/js_logo.png";
import mongoLogo from "../assets/mongo_logo.png";
import nodeLogo from "../assets/node_logo.png";
import postgresLogo from "../assets/postgres_logo.png";
import reactLogo from "../assets/react_logo.png";
import tsLogo from "../assets/ts_logo.svg";
import tailwindLogo from "../assets/tailwind-css-seeklogo.svg";
import javaLogo from "../assets/java_logo.png";

function Section3() {
  return (
    <>
      <section id="sn-3">
        <div className="wrapper">
          <h1 className="sn-title rt">My Skills</h1>
          <hr />
          <div className="grid-container">
            <div className="skill">
              <img src={htmlLogo} alt="skill-logo" />
              <h3>HTML/CSS</h3>
            </div>
            <div className="skill">
              <img src={jsLogo} alt="skill-logo" />
              <h3>JavaScript</h3>
            </div>
            <div className="skill">
              <img src={postgresLogo} alt="skill-logo" />
              <h3>PostgreSQL</h3>
            </div>
            <div className="skill">
              <img src={mongoLogo} alt="skill-logo" />
              <h3>MongoDB</h3>
            </div>
            <div className="skill">
              <img src={nodeLogo} alt="skill-logo" />
              <h3>Node.js</h3>
            </div>
            <div className="skill">
              <img src={reactLogo} alt="skill-logo" />
              <h3>React</h3>
            </div>
            <div className="skill">
              <img src={tsLogo} alt="skill-logo" />
              <h3>TypeScript</h3>
            </div>
            <div className="skill">
              <img src={tailwindLogo} alt="skill-logo" />
              <h3>Tailwind CSS</h3>
            </div>
            <div className="skill">
              <img src={javaLogo} alt="skill-logo" />
              <h3>Java</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section3;
