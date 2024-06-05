import { useState, useEffect } from "react";
import "../header.css";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [toggle, toggleNav] = useState(true);
  const [activeSection, setActiveSection] = useState("hero-sn");

  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const options = {
      root: null,
      threshold: 0.8, // Adjust as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  function handleClick() {
    toggleNav(!toggle);
  }

  const navLinks = Array.from(
    document.getElementsByClassName("lk") as HTMLSelectElement
  );
  navLinks.forEach((link) => {
    link.addEventListener("onclick", () => {
      handleClick();
    });
  });

  return (
    <>
      <div className="header">
        <div className="wrapper">
          <button className="ham-btn" onClick={handleClick}>
            <RxHamburgerMenu />
          </button>
          <nav className={`nav ${toggle ? "show-menu" : ""}`}>
            <ul>
              <li>
                <a
                  href="#hero-sn"
                  className={`lk ${
                    activeSection === "hero-sn" ? "active" : ""
                  }`}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#sn-2"
                  className={`lk ${activeSection === "sn-2" ? "active" : ""}`}
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#sn-3"
                  className={`lk ${activeSection === "sn-3" ? "active" : ""}`}
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#sn-4"
                  className={`lk ${activeSection === "sn-4" ? "active" : ""}`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#sn-5"
                  className={`lk ${activeSection === "sn-5" ? "active" : ""}`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Header;
