import React from "react";

const Skills = () => {
  return (
    <section className="skills" id="about">
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="card border-primary mb-3" style={{ width: "100%" }}>
              <div className="card-header">Current Life</div>
              <div className="card-body text-dark">
                <p className="card-text">
                  I work as a Front end engineer at Danapay, I work to improve
                  the experience of mobile Applications.
                </p>
              </div>
              <div className="card-footer">Working with Danapay</div>
            </div>

            <div className="card border-danger mb-3" style={{ width: "100%" }}>
              <div className="card-header">My Education</div>
              <div className="card-body text-dark">
                <p className="card-text">
                  I am currently pursuing the coding challenges on{" "}
                  <b>Free Code Camp</b> to take my coding knowledge from current
                  level to a very confident level. I graduated from{" "}
                  <b>Makerere University</b> with my{" "}
                  <b>
                    Bachelor of Science, major in Software Engineering in 2019
                  </b>
                  . My education helped build a strong foundation and
                  professional discipline, allowing me to continue to develop
                  in-demand skills while working.
                </p>
              </div>
              <div className="card-footer">At FreeCodeCamp</div>
            </div>
          </div>
          <div
            className="col-md-4 col-sm-6 col-xs-6"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="years">
              <h1 className="display-1">
                <b>3+</b>
              </h1>
              <p className="h4">
                years of <br />
                professional <br />
                experience
              </p>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 col-xs-6">
            <div className="card border-success mb-3" style={{ width: "100%" }}>
              <div className="card-header">Ideas panel</div>
              <div className="card-body text-dark">
                <p className="card-text">
                  I've interacted with many web and mobile apps in different
                  industries and verticals. As a growing developer I decided
                  that it would be a fun challenge to try designing and building
                  my own and also develope software solving problems of people
                  around me in my free time. If you want to work with me please
                  send me a text.
                </p>
                <p>
                  This site is host to a variety of things professional and
                  personal; you can learn more about who I am, why I love what I
                  do, I have lots of ideas, if you have any questions, you can
                  contact me via e-mail.
                </p>
              </div>
              <div className="card-footer">
                <p>
                  <b>ghkatende @ gmail . com</b> <br /> or send a message
                  through my contact form [ the fastest way to connect me.]
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
