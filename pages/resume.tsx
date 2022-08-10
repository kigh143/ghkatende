import React, { useRef, useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import ReactToPrint from "react-to-print";
import { useReactToPrint } from "react-to-print";
import LogRocket from "logrocket";

const education = [
  {
    name: "JavaScript Algorithms and Data structure.",
    school: "Free Code Camp",
    year: "March 2019  - present",
    link: "https://www.freecodecamp.org/ghkatende1",
  },
  {
    name: "Web development in PHP, HTML, and CSS",
    school: "Fertile IT World",
    year: "Dec 2012  - May 2013",
    link: "https://www.linkedin.com/in/fit-world-ltd-fertile-it-world-8ab93139/?originalSubdomain=ug",
  },
  {
    name: "Bachelors of Science in Software Engineering",
    school: "Makerere University",
    year: "Aug 2013 - Jan 2018",
    link: "https://www.mak.ac.ug/",
  },
  {
    name: "Uganda Advanced Certificate of Education",
    school: "Ndejje Senior Secondary School",
    year: "Feb 2011 - Dec  2012",
    link: "https://www.ndejjesss.ac.ug/",
  },
  {
    name: "Uganda Certificate of Education",
    school: "Seeta High School",
    year: "Feb 2007 - Nov 2010",
    link: "https://seetahigh.ac.ug/",
  },
];
const Skills = [
  "JavaScript",
  "Node Js",
  "React Js",
  "React Native",
  "Firebase",
  "Airtable",
  "MySQL",
  "MongoDB",
  "HTML",
  "CSS",
  "Bootstrap & Tailwind",
  "Git",
  "PHP",
  "CircleCI & Fastlane",
];
const hobbies = [
  "Watching Documentaries",
  "Traveling",
  "Teaching Code to others",
  "Playing Football",
];
const workExperience = [
  {
    name: "Danapay, Remotely",
    link: "https://www.danapay.com/",
    tasks: [
      "Implementing new features in the application like deep linking and push notification to improve customer engagement on the application.",
      "Automating builds with continuous deployment by adding a continuous integration pipeline using Fastlane and circle CI.",
      "I introduced testing and reduced the bugs that were shipped into the production environment by 30% using react testing library.",
    ],
    duration: ["Nov 2019", "Present"],
    job: "Front End Developer",
    type: "Full Time",
    technologies: "React Js, Firebase, HTML, CSS, Bootstrap",
  },
  {
    name: "Ultiro AB, Remotely",
    link: "https://www.danapay.com/",
    tasks: [
      "Performed upgrades and maintained WordPress sites for Ultiro’s existing clients.",
      "I wrote project proposals for new projects detailing the timelines and features. ",
      "Worked closely with customer support to respond quickly to user issues, permanently solve them, and reduce the turnaround time of fixes.",
    ],
    duration: ["Feb 2019", "Aug 2021"],
    job: "FullStack Software Developer",
    type: "Full Time",
    technologies:
      "React Js, Firebase, HTML, CSS, Bootstrap, PHP, MySQL, Wordpress, Node js",
  },
  {
    name: "Ahindi (Uganda)",
    tasks: [
      "Working as a product manager and  Front End developer for both the web and mobile app, I was in charge of setting project goals and sprints.",
      "Automated continuous deployment by adding a continuous integration pipeline using Fastlane and circle CI. this helped us ship code quickly to the end-users.",
    ],
    duration: ["Mar 2020", "Jun 2020"],
    job: " React js and  React Native Developer",
    type: "Contract",
    technologies: "React Native, Android , IOS ",
  },
  {
    name: "Addressya (Remotely)",
    tasks: [
      "Got the company up to pace to release the first MVP by fixing the bugs in the old code base by upgrading the application’s react-native version and removing legacy code.",
      "I worked closely with the backend engineer to optimize application performance and increase the application start-up speed.",
      "Helped formulate and document software development best practices for the team by sharing example code changes from various development & product teams.",
    ],
    duration: ["Feb 2021", "Nov 2021"],
    job: " React js and  React Native Developer",
    type: "Full Time",
    technologies: "React Native, Android, IOS",
  },
  {
    name: "Imuka Access (Uganda)",
    tasks: [
      "Assigned tasks to the other developers.",
      "Worked on the back end using firebase and PHP making a RESTFUL API.",
      "Ability to meet clients face to face and build long-term relationships.",
      "I worked on the imuka agent application that helped imuka agents, onboard Entrepreneurs, on the application.",
      "I led the team of developers to implement requirements for the application.",
      "I was in charge of leading the code reviews and doing sprint planning for the team.",
    ],
    duration: ["Feb 2018", "Jan 2019"],
    job: "Full Stack Developer",
    type: "Full Time",
    technologies: "Ionic, Angular, Firebase, PHP, MySQL",
  },
  {
    name: "GreenBridge School Of Open Technology",
    tasks: [
      "Monitoring and supporting student projects",
      "Teaching students different web technologies like javascript, CSS, and HTML",
      "Reviewing student’s code and projects to improve code quality",
    ],
    duration: ["May 2017", "Aug 2017"],
    job: "Website Design Trainer",
    type: "Contract",
    technologies: "HTML, CSS, Javascript",
  },
  {
    name: "StratCom",
    tasks: [
      "Monitoring and supporting student projects for final years at university",
      "Teaching students different web and mobile technologies",
      "Reviewing student’s code and projects to improve code quality",
    ],
    duration: ["May 2016", "Aug 2018"],
    job: "Website Design Trainer",
    type: "Contract",
    technologies: "HTML, CSS, Javascript, Ionic, Angular, PHP, MySQL",
  },
];
const summary =
  "I'm a mobile and web developer who's experienced and passionate in the sector. As a result of my education and experience, I have gained the knowledge and skills necessary to build scalable software products. I enjoy every step of the software development life cycle.";

const Resume: NextPage = () => {
  const componentRef = useRef(null);
  const [registered, setRegistered] = useState(false);

  const downLoad = useReactToPrint({
    content: () => componentRef.current,
  });

  useEffect(() => {
    LogRocket.init("aqa6tz/ghkatende");
  }, []);

  return (
    <>
      <Header
        title={"Resume | Katende Hakim CV."}
        description={summary}
        keywords={
          "Resume, Katende Hakim, React native, React js, Node js, personal projects, Software Engineer, Full Stack Developer, Front End Developer, Mobile Developer, Web Developer, Uganda, Kampala"
        }
      />
      <section className="bg-gray-100 pt-7 pb-7">
        <div className="container px-8 mx-auto sm:px-12 lg:px-20 flex flex-row justify-between items-center">
          <div>
            <h2>My Resume</h2>
            <small className="text-gray-500">Last Updated on Aug 12 2022</small>
          </div>
          <a
            onClick={() => downLoad()}
            className="cursor-pointer text-blue-500 font-bold"
          >
            <small>Download Resume</small>
          </a>
        </div>
      </section>

      <section className="p-10 sm:p-4 md:p-20 lg:p-20 bg-gray-400">
        <div
          ref={componentRef}
          className="container  px-8 mx-auto sm:px-8 lg:px-20 rounded-lg  flex flex-col justify-between bg-white"
        >
          <div className="flex flex-row justify-between items-center py-10 pt-20">
            <div className="flex flex-row items-center xs:flex-col md:flex-col sm:flex-col">
              <div>
                <img
                  src="/hakim2.jpeg"
                  style={{
                    height: 100,
                    width: 100,
                    borderRadius: 75,
                    marginRight: 30,
                  }}
                  className="shadow-lg"
                />
              </div>
              <div>
                <div className="py-4 mb-3">
                  <h2 className="text-2xl">G. Hakim Katende</h2>
                  <p className="text-gray-500">
                    Full stack Front end heavy developer
                  </p>
                  <small className="text-blue-300">Learning ...</small>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-end items-end">
              <small className="text-gray-500 font-bold">
                ghkatende@gmail.com
              </small>
              <small className="text-gray-500">Kampala</small>
              <small className="text-gray-500">Uganda</small>
            </div>
          </div>

          <div className="py-6">
            <h2 className="font-bold mb-2 text-gray-500">Summary</h2>
            <p>{summary}</p>
          </div>

          <div className="py-6">
            <h2 className="font-bold mb-2 text-gray-500">
              Skills and Technology
            </h2>
            <div className="flex flex-row flex-wrap py-4">
              {Skills.map((skill, index) => (
                <small
                  style={{ borderRadius: 100 }}
                  className="bg-gray-200 px-4 py-1 my-2 mr-2"
                >
                  {skill}
                </small>
              ))}
            </div>
          </div>

          <div className="py-6">
            <h2 className="font-bold mb-2 text-gray-500">Work Experience</h2>
            <div className="py-4">
              {workExperience.map((work, index) => (
                <div className="bg-white p-4 rounded-lg my-8 border-2">
                  <div className="flex flex-row justify-between items-center sm:flex-col">
                    <div className="mb-3">
                      <h3 className="text-xl my-2 font-bold">
                        {work.job} ({work.type})
                      </h3>
                      <p>{work.name}</p>
                      <small>{work.technologies}</small>
                    </div>
                    <div>
                      <p>
                        <small className="font-bold">
                          {work.duration[0]} - {work.duration[1]}
                        </small>
                      </p>
                    </div>
                  </div>
                  <div className="my-2">
                    <p>Tasks and achievements</p>
                    <ul className="my-4 list-disc ml-10 ">
                      {work.tasks.map((task, index) => (
                        <li key={index}>
                          <small>{task}</small>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-6">
            <h2 className="font-bold mb-2 text-gray-500">
              Education Background
            </h2>
            <div className="py-4">
              {education.map((edu, index) => (
                <div className="bg-white p-4 rounded-md my-4 border-2">
                  <div className="flex flex-row justify-between items-center sm:flex-col">
                    <div>
                      <h3 className="font-bold">{edu.name}</h3>
                      <small>{edu.school}</small>
                    </div>
                    <div>
                      <small>{edu.year}</small>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="py-6">
            <h2 className="font-bold mb-2 text-gray-500">Hobbies</h2>
            <div className="flex flex-row flex-wrap py-4">
              {hobbies.map((hobby, index) => (
                <div className="bg-white py-2 px-4 rounded-lg my-2 border-2 mr-4">
                  <small>{hobby}</small>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Resume;
