import { useState } from "react";
import "../header.css";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  const [toggle, toggleNav] = useState(true);

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
                <a href="#hero-sn" className="lk">
                  Home
                </a>
              </li>
              <li>
                <a href="#sn-2" className="lk">
                  About
                </a>
              </li>
              <li>
                <a href="#sn-3" className="lk">
                  Skills
                </a>
              </li>
              <li>
                <a href="#sn-4" className="lk">
                  Projects
                </a>
              </li>
              <li>
                <a href="#sn-5" className="lk">
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
