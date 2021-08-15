import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <img
        className="nav__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      {/* <div>
        <ul className="nav__tiles">
          <li>
            <a className="nav_tile" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="nav_tile" href="#">
              TV Shows
            </a>
          </li>
          <li>
            <a className="nav_tile" href="#">
              Movies
            </a>
          </li>
          <li>
            <a className="nav_tile" href="#">
              News & Popular
            </a>
          </li>
          <li>
            <a className="nav_tile" href="#">
              MyList
            </a>
          </li>
        </ul>
      </div> */}
      <img
        className="nav__avatar"
        src="https://i.pinimg.com/originals/30/db/47/30db479e1558c3ed46b4ed23b3cd98ae.png"
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Nav;
