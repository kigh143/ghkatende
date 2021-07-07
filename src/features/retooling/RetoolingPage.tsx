import React, { useEffect, useState } from "react";
import "./styles.css";
import bg from "./images/retoolHero.png";
// import { Link } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import { airTableApi } from "./airtable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const RetoolingPage: React.FC = () => {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [gender, setGender] = useState("");
  const [hearabout, setHearAbout] = useState("");
  const [experience, setExperience] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const register = async (e: any) => {
    try {
      e.preventDefault();
      setLoading(true);
      const user = {
        firstname,
        lastname,
        phone,
        gender,
        experience,
        email,
        hearabout,
      };
      const res = await airTableApi.createUser(user);
      if (res.id) {
        setLoading(false);
        toast.dark(
          "😊 Wow, thanks for registering, I will be in touch shortly",
          {
            position: "bottom-right",
            autoClose: false,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );

        setEmail("");
        setFirstName("");
        setLastName("");
        setHearAbout("");
        setExperience("");
        setGender("");
        setPhone("");
      }
    } catch (error) {
      setLoading(false);
      toast.error(error.message, {
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };

  useEffect(() => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <>
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
            <a className="navbar-brand" href="/retooling">
              <b> Re-Tooling </b>
            </a>
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
                  <Link className="nav-link" to="#process">
                    How it works
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="#faqs">
                    FAQs{" "}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">
                    GHKatende{" "}
                  </Link>
                </li>
              </ul>
              <form className="d-flex" style={{ marginLeft: 20 }}>
                <Link to="#join" className="btn btn-success">
                  join Retooling
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </header>
      <main data-bs-spy="scroll">
        <section
          id="hero"
          className="bg-gray-400"
          style={{
            backgroundImage: ` linear-gradient(#050505ab, #020202b2), url(${bg})`,
          }}
        >
          <div className="container col-xxl-8 px-4 py-5 main">
            <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
              <div className="col-10 col-sm-8 col-lg-6"></div>
              <div className="col-lg-6">
                <h1 className="display-5 fw-bold lh-1 mb-3">
                  Invest in Your Future
                </h1>
                <p className="lead">
                  Do you want to learn how to Code or become a Better Developer
                  <br />
                  and Entrepreneur, Take the first step to learn with
                  Retooling,.
                </p>
                <div className="d-grid gap-2 d-md-flex justify-content-md-start mt-4">
                  <a
                    href="#join"
                    className="btn btn-success btn-lg px-4 me-md-2"
                  >
                    join Us
                  </a>
                  <a
                    href="#join"
                    className="btn btn-outline-success btn-lg px-4"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="benefits" className="benefits">
            <div className="container">
              <div className="row">
                <div className="col-md-4 benefit1">
                  <div className="shadow-md rounded-lg">
                    <p>
                      <i className="fa fa-line-chart" aria-hidden="true"></i>
                    </p>
                    <h3 className="h3">Visible outcomes</h3>
                    <p>
                      The impact is about results. It’s incremental progress
                      toward a goal and small wins that lead to big outcomes.
                      Our student’s progress is trackable.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 benefit1">
                  <div className="shadow-md rounded-lg">
                    <p>
                      <i className="fa fa-handshake-o" aria-hidden="true"></i>
                    </p>
                    <h3 className="h3">Executive connection</h3>
                    <p>
                      All the projects worked by the students are promoted since
                      they are built based on existing problems. These projects
                      attache investors.
                    </p>
                  </div>
                </div>

                <div className="col-md-4 benefit1">
                  <div className="shadow-md rounded-lg">
                    <p>
                      <i className="fa fa-map-signs" aria-hidden="true"></i>
                    </p>
                    <h3 className="h3">Career guidance.</h3>
                    <p>
                      Our learning process encompasses the software development
                      life cycle which exposes the student’s strength and
                      interests, these help us guide the student.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white about">
          <div className="container">
            <div className="row">
              <div className="col-md-5">
                <img src="./images/learn.png" alt="" />
              </div>
              <div className="col-md-6 flex item-center flex-col justify-center">
                <p>What is retooling?</p>
                <br />
                <h2 className="display-5 fw-bold">Re-Tooling</h2>
                <br />
                <p className="mb-2">
                  Retooling is a coding school that runs on a project-based
                  learning paradigm to teach students how to program and solve
                  problems using real-world scenarios.
                </p>
                <p className="mb-2">
                  we embrace Collaboration as its key to success. Students work
                  together on projects to utilize knowledge sharing.
                </p>
                <p className="mb-2">
                  Our teaching method is powerful and has extensive benefits for
                  students, ranging from critical thinking to project management
                  to self-confidence.
                </p>
                <p className="mb2">
                  We focus how energy on solving problems facing our communities
                  and we learn.
                </p>
              </div>
            </div>
            <div className="row results mt-8">
              <div className="col-md-4">
                <div className="flex items-center m-4 shadow-lg p-6 rounded-4">
                  <i className="fa fa-mobile" aria-hidden="true"></i>
                  <div>
                    <b>Mobile Application</b>
                    <br />
                    <small>
                      We use react native for mobile application development
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="flex items-center m-4 shadow-lg p-6 rounded-4">
                  <i className="fa fa-globe" aria-hidden="true"></i>
                  <div>
                    <b>Web Application</b>
                    <br />
                    <small>
                      We user react js, node Js, Firebase, MySQL and MongoDb
                    </small>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="flex items-center m-4 shadow-lg p-6 rounded-4">
                  <i className="fa fa-laptop" aria-hidden="true"></i>
                  <div>
                    <b>Desktop Application</b>
                    <br />
                    <small>
                      Our Desktop application are powered by Electron js and
                      react js
                    </small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="join" className="join" style={{ height: "100vh" }}>
          <div
            className="imageBg"
            style={{
              backgroundImage: `linear-gradient(#050505ab, #020202b2), url(${bg})`,
            }}
          >
            <div className="container">
              <div className="row words">
                <div className="col-md-6">
                  <p>Join the family</p>
                  <h2 className="display-5 fw-bold">
                    Register Your <br />
                    Account & Get Access
                  </h2>
                  <p>
                    Do you want to learn how to Code or become a Better
                    <br />
                    Developer and Entrepreneur, now is the chance to attain your
                    goal.
                  </p>
                </div>
                <div className="col-md-6"></div>
              </div>
            </div>
          </div>
          <div className="join-form">
            <div className="container">
              <div className="row">
                <div className="col-md-7 flex justify-end items-end pb-8">
                  <div>
                    <h2>Do you want to talk to human?</h2>
                    <p>
                      If you’d like to talk to a human on the phone, feel free
                      to
                      <br />
                      call us on: <b>+256788127712.</b> You can also
                      <a href="">book</a> a phone call,
                    </p>
                  </div>
                </div>
                <div className="col-md-5">
                  <form className="row g-3 shadow-lg bg-white p-8 rounded-lg">
                    <div className="col-md-6">
                      <label className="form-label">First Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        onChange={(e) => setFirstName(e.target.value)}
                        value={firstname}
                      />
                    </div>
                    <div className="col-md-6">
                      <label className="form-label">Last Name</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputAddress"
                        onChange={(e) => setLastName(e.target.value)}
                        value={lastname}
                      />
                    </div>
                    <div className="col-12">
                      <label className="form-label">Gender</label>
                      <select
                        id="inputState"
                        className="form-select"
                        onChange={(e) => setGender(e.target.value)}
                        value={gender}
                      >
                        <option selected>Choose...</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Email</label>
                      <input
                        type="email"
                        className="form-control"
                        id="inputEmail4"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                      />
                    </div>
                    <div className="col-md-12">
                      <label className="form-label">Phone Number</label>
                      <input
                        type="text"
                        className="form-control"
                        id="inputPassword4"
                        onChange={(e) => setPhone(e.target.value)}
                        value={phone}
                      />
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        Previous Coding Experience
                      </label>
                      <select
                        id="inputState"
                        className="form-select"
                        onChange={(e) => setExperience(e.target.value)}
                        value={experience}
                      >
                        <option selected>Choose...</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                        <option></option>
                      </select>
                    </div>

                    <div className="col-12">
                      <label className="form-label">
                        How did you hear about this program? required
                      </label>
                      <select
                        className="form-select"
                        onChange={(e) => setHearAbout(e.target.value)}
                        value={hearabout}
                      >
                        <option selected>Choose...</option>
                        <option value="facebook">Facebook</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Friend">Friend</option>
                        <option value="While googling">While googling</option>
                      </select>
                    </div>

                    <div className="col-12 flex justify-center items-center">
                      {loading ? (
                        <button className="btn btn-warning shadow-lg" disabled>
                          <span
                            className="spinner-grow spinner-grow-sm mr-4"
                            role="status"
                            aria-hidden="true"
                          ></span>
                          Creating Account
                        </button>
                      ) : (
                        <button
                          type="submit"
                          className="btn btn-success btn-block"
                          onClick={(e) => register(e)}
                        >
                          Register
                        </button>
                      )}
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faqs" className="bg-gray-200 faqs">
          <div className="container">
            <div className="mt-4 mb-4">
              <h2 className="display-6 fw-bold">
                What you should <br />
                expect
              </h2>
            </div>
            <div className="row">
              <div className="col-md-4">
                <div className="shadow-md">
                  <p className="h3">Collaboration</p>
                  <p>
                    Relationships formed during collaboration is a huge part of
                    Retooling. You might be expected to form relationships with
                    community members when working on projects.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="shadow-md">
                  <p className="h3">Problem Solving</p>
                  <p>
                    You will learn how to solve problems that are important to
                    you, including real community issues, more effectively—even
                    learning from failure and possibly starting over.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="shadow-md">
                  <p className="h3">Creativity</p>
                  <p>
                    You will apply creative thinking skills to innovate new
                    product designs and possibilities for projects. You might
                    also have to explore you curiosities..
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="shadow-md">
                  <p className="h3">In-Depth Understanding</p>
                  <p>
                    You will build on the research skills and deepen your
                    learning of applied content beyond facts or memorization.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="shadow-md">
                  <p className="h3">Critical Thinking</p>
                  <p>
                    You will learn to look at problems with a critical thinking
                    lens, asking questions and coming up with possible solutions
                    for their project.
                  </p>
                </div>
              </div>

              <div className="col-md-4">
                <div className="shadow-md">
                  <p className="h3">Project Management</p>
                  <p>
                    you will learn how to manage projects and assignments more
                    efficiently.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="process"
          className="bg-white process flex justify-center items-center"
        >
          <div className="container">
            <div className="mt-4 mb-4">
              <p>Process?</p>
              <h2 className="display-5 fw-bold">Our Process</h2>
              <br />
              <div className="row">
                <div className="col-md-4">
                  <div className="card mb-3 text-center">
                    <img
                      src="/images/create.png"
                      className="card-img-top"
                      alt="..."
                      style={{ width: "60%", height: "auto", margin: "auto" }}
                    />
                    <div className="card-body">
                      <h5 className="card-title">STEP 1</h5>
                      <p className="card-text">
                        Register for retooling using the form above, We shall
                        send detailed information on your email
                      </p>
                    </div>
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card mb-3 text-center">
                    <div className="card-body">
                      <h5 className="card-title">STEP 2</h5>
                      <p className="card-text">
                        With Retooling you have to have account with this site/
                        application, ie Github, LinkedIn, Figma, G-mail account,
                        Zoom, keep tabs
                      </p>
                    </div>
                    <img
                      src="/images/social.png"
                      className="card-img-top"
                      alt="..."
                      style={{ width: "60%", height: "auto", margin: "auto" }}
                    />
                  </div>
                </div>

                <div className="col-md-4">
                  <div className="card mb-3 text-center">
                    <img
                      src="/images/ideas.png"
                      className="card-img-top"
                      alt="..."
                      style={{ width: "60%", height: "auto", margin: "auto" }}
                    />

                    <div className="card-body">
                      <h5 className="card-title">STEP 3</h5>
                      <p className="card-text">
                        Since we teach with a project based paradigm, you might
                        be required to come up with an idea that solves a social
                        problem in your community. Please Come up with one.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer
          position="bottom-right"
          autoClose={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
        />
      </main>
    </>
  );
};

export default RetoolingPage;
