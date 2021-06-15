import React from "react";
import { Link } from "react-scroll";
import { saveAs } from "file-saver";

const Header = () => {
  const saveFile = () => {
    saveAs("./cv/katendecv.docx", "katendecv.docx");
  };
  return (
    <>
      <div
        className="shadow-sm header-bgColor fixed-top"
        style={{ backgroundColor: "#2c4b76" }}
      >
        <div className="container">
          <header className="d-flex flex-wrap justify-content-center py-3">
            <a
              href="/"
              className="d-flex align-items-center mb-3 mb-md-0 me-md-auto  text-decoration-none"
            >
              <span className="fs-4">GHKatende</span>
            </a>

            <ul className="nav nav-pills">
              <li className="nav-item">
                <Link to="home" spy={true} smooth={false} className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="about" spy={true} smooth={false} className="nav-link">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="contact"
                  spy={true}
                  smooth={false}
                  className="nav-link"
                >
                  Contact Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="projects"
                  spy={true}
                  smooth={false}
                  className="nav-link"
                >
                  Projects
                </Link>
              </li>
            </ul>
          </header>
        </div>
      </div>
      <div
        className="headerHero"
        style={{ backgroundColor: "#2c4b76" }}
        id="home"
      >
        <div className="container">
          <div className="row align-items-center g-5 pt-5">
            <div className="col-lg-3" />
            <div className="col-lg-6 profileText text-center">
              <h1 className="display-5 fw-bold lh-1 mb-3">
                Hi, I'm Katende Hakim,
              </h1>
              <p className="lead">
                A professional software developer, I look forward to utilizing
                the knowledge that I have gathered over years to help customers
                build software products for an even more successful
                implementation.
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  type="button"
                  className="btn btn-warning btn-lg px-4 me-md-2"
                >
                  <Link to="contact" spy={true} smooth={false}>
                    Hire Me
                  </Link>
                </button>
                <button
                  type="button"
                  className="btn btn-secondary btn-lg px-4"
                  onClick={saveFile}
                >
                  Download CV
                </button>
              </div>
            </div>
            <div className="col-lg-3" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
