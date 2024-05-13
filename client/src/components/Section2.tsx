import "../sn2.css";
import potrait from "../assets/potrait-me.jpg";

function Section2() {
  return (
    <>
      <section id="sn-2">
        <div className="wrapper">
          <h1 className="sn-title lt">Introduction</h1>
          <hr />
          <div className="body">
            <img src={potrait} />
            <p className="sn-text">
              My name is William Wani. I'm based in Mutare, Zimbabwe. I am full
              stack developer, specialising in backend development, with two
              years of experience working on personal projects. I have curated a
              handful of my projects here in my portfolio. <br />
              I am currently studying for a BSc. in Computer Science and Applied
              Mathematics at Rhodes University in South Africa, expected to
              graduate in 2025. <br />I take pride in having a high standard for
              my work. Client satisfaction always comes first, and passion is at
              the center of all I do. I'm also a musician, and lover of
              Tiramisu!
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Section2;