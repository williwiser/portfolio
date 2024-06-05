import "../sn2.css";
import potrait from "../assets/potrait-me.jpg";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Section2() {
  return (
    <>
      <section id="sn-2">
        <div className="wrapper">
          <h1 className="sn-title lt">Introduction</h1>
          <hr />
          <div className="body">
            <img src={potrait} />
            <div className="bio">
              <p className="sn-text">
                Hello there, it's William Wani, an avid full stack developer
                based in Mutare, Zimbabwe. I build web applications and have two
                years of experience working on personal projects. I have curated
                a handful of my projects here in my portfolio. <br />
                I am currently studying for a B.Sc. in Computer Science and
                Applied Mathematics at Rhodes University in South Africa,
                expected to graduate in 2025. <br /> I take pride in having a
                high standard for my work, meticulously paying attention to
                small details. I'm also a musician, lover of jazz and curious
                stargazer!
              </p>
              <a
                href="https://drive.google.com/file/d/1MGhv_nTQZ2MaOIpo9yFiBk-wyFDL8DRn/view?usp=sharing"
                className="demo-btn"
                download="resume"
              >
                <FontAwesomeIcon icon={faDownload} /> Download CV
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;
