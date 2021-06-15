import React, { Component } from "react";

const Projects = () => {
  const projects_collection = [
    {
      name: "Addressya",
      period: "8 months",
      type: "contract",
      role: "Front End Dev",
      technologies: "React-Native, React, Nodejs, Firebase",
      image: "../images/projects/addressya.jpg",
      description:
        " Diagnose and fix bugs and performance bottlenecks for performance that feels native. Maintain code and write automated tests to ensure the product is of the highest quality Transition existing React web apps to React Native. Deploying the application to google play and App store.",
      link: "https://www.addressaya.com",
    },
    {
      name: "Ahindi",
      period: "8 months",
      type: "contract",
      role: "Front End Dev",
      technologies: "React_Native, React, Firebase",
      image: "../images/projects/ahindi.jpg",
      description:
        "I was responsible for developing, implementing and maintaining mostly Mobile and Web Application. I collaborated with technical and business staff to get the  idea from the requirements into a fully functional  product.",
      link: "https://www.ahindiapp.com",
    },
    {
      name: "Danapay",
      period: "8 months",
      type: "contract",
      role: "Front End Dev",
      technologies: "React-Native, React, Fastlane, CircleCi, Firebase FCM",
      image: "../images/projects/danapay.jpg",
      description:
        "I worked as the front End  Engineer of the two main products of Danapay in React Native.  Tasked to develop and maintain two Applications on both IOs and Android.",
      link: "https://www.danapay.io",
    },
    {
      name: "PulidaWo",
      period: "1.5 months",
      type: "contract",
      role: "Front End Dev",
      technologies: "React native, React, Fastlane, CircleCi, Firebase FCM",
      image: "../images/projects/pulidawo.jpg",
      description:
        " Quickly design and customize responsive mobile-first sites",
      link: "https://www.pulidawo.io",
    },
  ];
  return (
    <main className="my-5" id="projects">
      <section className="py-2 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Projects</h1>
          </div>
        </div>
      </section>
      <div className="container">
        <div className="">
          {projects_collection.map((project, index) => (
            <div
              className={`row ${
                index % 2 === 0 ? "flex-lg-row-reverse" : ""
              } g-5 py-5`}
            >
              <div className="col-10 col-sm-8 col-lg-6 imageProjectBox">
                <img
                  src={project.image}
                  alt="Bootstrap Themes"
                  loading="lazy"
                />
              </div>
              <div className="col-lg-6 descriptionProjectBox">
                <h1 className="display-5 fw-bold lh-1 mb-3">{project.name}</h1>
                <p>
                  <small>
                    <b>My Role : {project.role}</b>
                  </small>
                </p>
                <p className="lead">{project.description}</p>
                <hr />
                <p>
                  <b>Technologies : </b>
                  {project.technologies}
                </p>
                <p>
                  <b>Type : </b>
                  {project.type}
                </p>

                <p>
                  <b>Duration : </b>
                  {project.period}
                </p>

                <hr />

                <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                  <a
                    href={project.link}
                    target="_blank"
                    className="btn btn-primary btn-lg px-4 me-md-2"
                  >
                    Visit Link
                  </a>
                  <a
                    type="button"
                    className="btn btn-outline-secondary btn-lg px-4"
                  >
                    Comment
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default Projects;
