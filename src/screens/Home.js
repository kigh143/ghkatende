import React, { Component } from "react";
import Contact from "../components/Contact";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

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
    description: " Quickly design and customize responsive mobile-first sites",
    link: "https://www.pulidawo.io",
  },
  {
    name: "Micards",
    period: "2weeks",
    type: "Side work",
    role: "Front End Dev",
    technologies: "React native",
    image: "../images/projects/micards.jpg",
    description: " Quickly design and customize responsive mobile-first sites",
    link: "https://www.pulidawo.io",
  },
];

export class Home extends Component {
  render() {
    return (
      <>
        <section id="hero">
          <div className="container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8 text-center">
                <h1 class="display-3">Katende Hakim G</h1>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>
        </section>
        <section id="about">
          <div className="container">
            <div className="row">
              <div className="col-md-7">
                <Tabs>
                  <TabList>
                    <Tab>Current Life</Tab>
                    <Tab>Education</Tab>
                    <Tab>Ideas</Tab>
                  </TabList>

                  <TabPanel>
                    <div id="currentLife">
                      <p>
                        I work as a Front end engineer at Danapay, I work to
                        improve the experience of mobile Applications.
                      </p>

                      <p>
                        A professional software developer, I look forward to
                        utilizing the knowledge that I have gathered over years
                        to help customers build software products for an even
                        more successful implementation.
                      </p>
                    </div>
                  </TabPanel>
                  <TabPanel>
                    <p>
                      I am currently pursuing the coding challenges on{" "}
                      <b>Free Code Camp</b> to take my coding knowledge from
                      current level to a very confident level. I graduated from{" "}
                      <b>Makerere University</b> with my{" "}
                      <b>
                        Bachelor of Science, major in Software Engineering in
                        2019
                      </b>
                      . My education helped build a strong foundation and
                      professional discipline, allowing me to continue to
                      develop in-demand skills while working.
                    </p>
                  </TabPanel>
                  <TabPanel>
                    <p>
                      I've interacted with many web and mobile apps in different
                      industries and verticals. As a growing developer I decided
                      that it would be a fun challenge to try designing and
                      building my own and also develope software solving
                      problems of people around me in my free time. If you want
                      to work with me please send me a text.
                    </p>
                    <p>
                      This site is host to a variety of things professional and
                      personal; you can learn more about who I am, why I love
                      what I do, I have lots of ideas, if you have any
                      questions, you can contact me via e-mail.
                    </p>
                  </TabPanel>
                </Tabs>
              </div>
              <div className="col-md-5">
                <div className="photoFlame">
                  <div className="photoBg">
                    <img
                      src="../images/ghkatende-me.png"
                      style={{ width: "100%" }}
                    />
                  </div>
                  <div className="photos">
                    {[1, 2, 3, 3, 4].map((pic, index) => (
                      <div key={index} className="photoInner">
                        <img src="../images/ghkatende-me.png" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="projects">
          <div className="container">
            <div className="row">
              {projects_collection.map((project, index) => (
                <div className="col-md-6" key={index}>
                  <div className="project__card ">
                    <div className="row">
                      <div className="col-md-3">
                        <img
                          src={project.image}
                          className="image"
                          alt="Bootstrap Themes"
                          loading="lazy"
                        />
                      </div>
                      <div className="col-md-9">
                        <h1>{project.name}</h1>
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
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="contact">
          <Contact />
        </section>
        <section id="footer"></section>
      </>
    );
  }
}

export default Home;
