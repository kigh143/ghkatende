import React, { useState } from "react";
import "./website.css";
import bg from "./images/bg.jpg";
import { useAppSelector } from "../../app/hooks";
import { Helmet } from "react-helmet";
import { airTableApi } from "./airtable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { HashLink as Link } from "react-router-hash-link";
import SEO from "../../components/SEO";

const WebsitePage: React.FC = () => {
  const projects = useAppSelector(
    (state) => state.persistedReducer.website.projects
  );

  const connections = useAppSelector(
    (state) => state.persistedReducer.website.connections
  );

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e: any) => {
    setIsSending(true);
    try {
      e.preventDefault();
      const emailObj = { name, email, message };
      const result = await airTableApi.createEmail(emailObj);
      if (result.id) {
        setIsSending(false);
        toast.dark("😊 Wow, thanks for contact me!", {
          position: "bottom-right",
          autoClose: false,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        setName("");
        setEmail("");
        setMessage("");
      }
    } catch (error) {
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      setIsSending(false);
    }
  };

  return (
    <div>
      <SEO
        title="GHKatende | A website and Mobile application developer"
        description="Katende Hakim is a web and mobile Developer. I'm very passionate and dedicated to my work."
        logo="/logo.png"
        image="./images/ivan1.jpg"
        url="https://ghkatende.com/"
      />
      <header>
        <nav
          className="
          navbar navbar-expand-lg navbar-dark
          bg-gray-800
          text-white
          fixed-top
        "
        >
          <div className="container">
            <Link className="navbar-brand" to="/#webHero">
              <b>GHKatende</b>
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="#about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#casestudy">
                    Projects
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/#service">
                    {" "}
                    Re-Tooling{" "}
                  </Link>
                </li>
              </ul>
              <form className="d-flex" style={{ marginLeft: 20 }}>
                <Link to="/#contact" className="btn btn-success">
                  I'm Social, Let's connect
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <div data-bs-spy="scroll">
        <div
          className="bg-gray-700 text-white "
          id="webHero"
          style={{
            backgroundImage: ` linear-gradient(#050505ab, #020202b2), url(${bg})`,
          }}
        >
          <div className="container col-xxl-8 px-4 py-5">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5 mobo">
              <div className="col-lg-6 moboImgbox">
                <img
                  src="./images/ghk.png"
                  alt="GHKatende"
                  className="onMobile"
                />
                <div className="mt-4 flex text-center">
                  {connections &&
                    connections.map((connection) => (
                      <a href={connection.link} target="_blank" className="m-4">
                        <i
                          className={`fa fa-${connection.icon}`}
                          style={{ color: connection.color, fontSize: 40 }}
                        ></i>{" "}
                        <br />
                        <small style={{ color: "#fff" }}>
                          {connection.name}
                        </small>
                      </a>
                    ))}
                </div>
                <h2 color="yellow">stuff</h2>
              </div>
              <div className="col-lg-6">
                <h3 className="display-6 fw-bold lh-1 mb-3">Hello, I am</h3>
                <h1 className="display-4 fw-bold lh-1 mb-3 text-green-200">
                  G . Hakim Katende
                </h1>
                <h5 className="h3">
                  Experienced Software developer with 3+ years developing Web
                  and mobile application.
                </h5>
                <br />
                <br />

                <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-8">
                  <Link to="/#contact" className="btn btn-success btn-lg px-4">
                    Contact Me
                  </Link>
                  {/* <a
                    target="_blank"
                    href="/images/hakimKatendeCV.docx"
                    className="btn btn-light btn-lg px-4"
                  >
                    DownLoad CV
                  </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="about" id="about">
          <div className="container">
            <div className="mobo">
              <h2>About</h2>
            </div>
            <div className="row">
              <div
                className="col-md-6 text-center"
                style={{ position: "relative" }}
              >
                <img src="./images/ivan1.jpg" className="shadow-lg aboutImg" />
              </div>
              <div className="col-md-6">
                <div style={{ height: 20 }}></div>
                <ul
                  className="nav nav-pills mb-3"
                  id="pills-tab"
                  role="tablist"
                >
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="pills-contact-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-contact"
                      type="button"
                      role="tab"
                      aria-controls="pills-contact"
                      aria-selected="false"
                    >
                      Experiences
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-home-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-home"
                      type="button"
                      role="tab"
                      aria-controls="pills-home"
                      aria-selected="true"
                    >
                      About Me
                    </button>
                  </li>

                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="pills-profile-tab"
                      data-bs-toggle="pill"
                      data-bs-target="#pills-profile"
                      type="button"
                      role="tab"
                      aria-controls="pills-profile"
                      aria-selected="false"
                    >
                      Ideas and Likes
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="pills-tabContent">
                  <div
                    className="tab-pane fade "
                    id="pills-home"
                    role="tabpanel"
                    aria-labelledby="pills-home-tab"
                    style={{ paddingLeft: 16 }}
                  >
                    <p>
                      My name is Katende Hakim, An experienced Software
                      developer with 3+ years developing Web and mobile
                      application, I have acquired the skills and knowledge
                      necessary to make your project a success. I enjoy every
                      step of the design process, from requirements elicitation
                      to software deployment.
                    </p>
                    <br />
                    <p>
                      I love detailed software requirements but can also
                      <b>work comfortably in an agile environment </b> with the
                      ability to communicate directly with product managers,
                      designers, and other developers.
                    </p>
                    <br />

                    <p>
                      I look forward to utilizing the knowledge that I have
                      gathered over years to help customers build software
                      products for an even more successful implementation.
                    </p>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="pills-profile"
                    role="tabpanel"
                    aria-labelledby="pills-profile-tab"
                    style={{ paddingLeft: 16 }}
                  >
                    <p>
                      I've interacted with many web and mobile apps in different
                      industries and verticals.
                    </p>{" "}
                    <br />
                    <p>
                      As a growing developer I decided that it would be a fun
                      challenge to try designing and building my own. By doing
                      this, I hope to solve problems for people around me.
                      <a href="#contact">
                        <b>Want to be part of it? join me.</b>
                      </a>
                    </p>
                    <br />
                    <p>
                      E-mail at <b>ghkatende @ gmail [.] com</b>
                      or send a message through my contact form [ the fastest
                      way to connect me].
                    </p>
                  </div>
                  <div
                    className="tab-pane fade pl-5 pt-3 show active"
                    id="pills-contact"
                    role="tabpanel"
                    aria-labelledby="pills-contact-tab"
                    style={{ paddingLeft: 16 }}
                  >
                    <p>
                      I currently work as a remote Full stack engineer, Working
                      on both website and Mobile application in different domain
                      with Danapay and Ultiro.
                    </p>
                    <br />
                    <p>
                      {" "}
                      <b>Always learning </b>
                    </p>
                    <p>
                      {" "}
                      I am currently pursuing coding challenges on
                      <b>Free Code Camp</b> and <b>CodeWars & LiteCode</b> to
                      take my coding knowledge from current level to a very
                      confident level
                    </p>{" "}
                    <br />
                    <p></p>
                    <br />
                    <p className="text-center">
                      <span className="badge rounded-pill bg-primary">
                        React native
                      </span>
                      <span className="badge rounded-pill bg-light text-dark">
                        {" "}
                        React JS
                      </span>
                      <span className="badge rounded-pill bg-secondary">
                        PHP
                      </span>
                      <span className="badge rounded-pill bg-warning text-dark">
                        HTMl
                      </span>
                      <span className="badge rounded-pill bg-success">CSS</span>
                      <span className="badge rounded-pill bg-warning text-dark">
                        MySQL
                      </span>
                      <span className="badge rounded-pill bg-success">
                        Node Js
                      </span>
                      <span className="badge rounded-pill bg-dark">
                        Mongo DB
                      </span>
                      <span className="badge rounded-pill bg-danger">
                        Javascript
                      </span>
                      <span className="badge rounded-pill bg-warning text-dark">
                        Firebase
                      </span>
                      <span className="badge rounded-pill bg-info text-dark">
                        CircleCI & Fastlane
                      </span>
                      <span className="badge rounded-pill bg-success">
                        Airtable
                      </span>
                      <span className="badge rounded-pill bg-light text-dark">
                        Git
                      </span>
                      <span className="badge rounded-pill bg-dark">
                        Angular
                      </span>
                    </p>
                  </div>
                </div>
                <br />
                <div></div>
              </div>
            </div>
          </div>
        </section>

        <section className="contact bg-gray-200" id="contact">
          <div className="container col-xl-10 col-xxl-8 px-4 py-5">
            <div className="mobo">
              <h2>Contact</h2>
            </div>
            <div className="row align-items-center g-lg-5 py-5">
              <div className="col-lg-7 text-center text-lg-start">
                <h2 className="display-4 fw-bold lh-1 mb-3">
                  I'm Social, <br />
                  Let's connect
                </h2>
                <p className="contactInfo">
                  This site is host to a variety of things professional and
                  personal; you can learn more about who I am, why I love what I
                  do, I have lots of ideas, if you have any questions, you can
                  contact me via e-mail.
                </p>
                <br />
                <div className="row notCenter">
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <i
                      className="fas fa-envelope-open-text"
                      style={{ fontSize: 16, color: "#555" }}
                    ></i>
                    <b>
                      <small>ghkatende @ gmail [.] com</small>{" "}
                    </b>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <i
                      className="fas fa-blender-phone"
                      style={{ fontSize: 16, color: "#555" }}
                    ></i>
                    <b>
                      <small>(+256) - 788127712</small>{" "}
                    </b>
                  </div>
                  <div className="col-md-4 col-sm-4 col-xs-4">
                    <i
                      className="fas fa-street-view"
                      style={{ fontSize: 16, color: "#555" }}
                    ></i>
                    <b>
                      <small>Kampala, (UG)</small>
                    </b>
                  </div>
                </div>
              </div>
              <div className="col-md-10 mx-auto col-lg-5">
                <form className="p-4 p-md-5 border rounded-3 bg-light">
                  <div className="mb-3">
                    <label className="form-label">Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="exampleFormControlInput1"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Email address</label>
                    <input
                      type="email"
                      className="form-control"
                      id="exampleFormControlInput1"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">message</label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                    ></textarea>
                  </div>

                  <div className="col-auto flex justify-center items-center">
                    {isSending ? (
                      <button className="btn btn-warning shadow-lg" disabled>
                        <span
                          className="spinner-grow spinner-grow-sm mr-4"
                          role="status"
                          aria-hidden="true"
                        ></span>
                        Sending Message ...
                      </button>
                    ) : (
                      <button
                        type="submit"
                        className="btn btn-success mb-3"
                        onClick={(e) => sendEmail(e)}
                      >
                        Send Message
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section id="service" className="service">
          <div className="px-4 pt-5 mt-5 text-center border-bottom">
            <h1 className="display-4 fw-bold"> Re-Tooling </h1>
            <div className="col-lg-6 mx-auto">
              <p className="lead mb-4">
                For the love of programming, I decide to create this community
                to teach others coding from the experience I have had over
                years. Welcome to <b>Re-Tooling.</b>
              </p>
              <div className="d-grid gap-2 d-sm-flex justify-content-sm-center mb-5">
                <Link
                  className="btn btn-success btn-lg px-4 me-sm-3"
                  to="/retooling"
                >
                  Read More
                </Link>
              </div>
            </div>
            <div className="overflow-hidden" style={{ maxHeight: "50vh" }}>
              <div className="container px-5">
                <img
                  src="./images/screen2.png"
                  className="img-fluid border rounded-3 shadow-lg mb-4"
                  alt="Example image"
                  width="100%"
                  height="500"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        <div id="casestudy">
          {projects &&
            projects.map((project, index) => (
              <section
                id="project"
                style={{
                  background: project.color,
                  color: project.textColor,
                  minHeight: "100vh",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                className="p-8"
              >
                <div className="container col-xxl-8 px-4">
                  <div className="mobo">
                    <b
                      style={{
                        color: project.textColor,
                        textTransform: "uppercase",
                        fontSize: 15,
                      }}
                    >
                      Project {index + 1}
                    </b>
                  </div>
                  <div className="row flex-lg-row-reverse align-items-center g-5">
                    <div className="col-lg-6">
                      <img
                        src={project.image}
                        className="projectImg shadow-md"
                        alt={project.name}
                        loading="lazy"
                      />
                    </div>
                    <div className="col-lg-6">
                      <h1 className="display-5 fw-bold lh-1 mb-3">
                        {project.name}
                      </h1>
                      <br />
                      <p className="lead">{project.role}</p>
                      <br />
                      <p className="lead">{project.description}</p> <br />
                      <p className="lead">{project.technologies}</p>
                      <div className="d-grid gap-2 d-md-flex justify-content-md-start pt-6">
                        <a
                          href={project.github}
                          className="btn btn-success btn-lg px-4 me-md-2"
                          target="_blank"
                        >
                          Source Code
                        </a>
                        <a
                          href={project.link}
                          className="btn btn-light btn-lg px-4"
                          target="_blank"
                        >
                          Demo Project
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ))}
        </div>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
      />
    </div>
  );
};

export default WebsitePage;
