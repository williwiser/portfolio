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
                Hello there, I'm William Wani, a passionate full stack developer
                hailing from the quiet city of Mutare, Zimbabwe. <br />
                Some little facts about me:
                <br />
                <ul>
                  <li>I build web applications 🧑‍💻</li>
                  <li>Computer science and applied math student @ Rhodes 🎓</li>
                  <li>Machine learning enthusiast 🤖</li>
                  <li>Working on an app 📱</li>
                </ul>
                Furthermore, I take pride in having a high standard for my work,
                meticulously paying attention to small details. But it's not all
                code and algorithms—I'm also a musician, lover of jazz and avid
                stargazer. <br /> Anyways, feel free to take a look around and
                get in touch if you'd like to collaborate or just chat!
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
