import React, { useState, useEffect } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";
import styles from "../styles/Home.module.css";
import { type } from "os";
import LogRocket from "logrocket";

type ProjectType = {
  name: string;
  description: string;
  image: string;
  link: string;
  period: string;
  type: string;
  technologies: string;
  color: string;
  github: string;
  isPersonal: boolean;
  role: string;
  textColor: string;
  category: string;
  longDescription: string;
  website: string;
};

const projects: ProjectType[] = [
  {
    name: "Addressya",
    period: "Ended, 10 months",
    type: "Full time ",
    role: "Front End Dev",
    technologies: "React-Native, React, Nodejs, Firebase",
    image: "/projects/addressya.png",
    description:
      "Addressya is solving one of the largest pains of businesses; finding, and being found, by their customers. We save valuable time, costs for the delivery, unnecessary refunds, ",
    link: "https://www.addressaya.com",
    color: "#45a553",
    textColor: "#fff",
    github: "https://github.com/kigh143",
    isPersonal: false,
    category: "mobile",
    longDescription: "",
    website: "https://www.addressaya.com",
  },
  {
    name: "Yofare",
    period: "2 months",
    type: "Personal Project",
    role: "Full-Stack",
    technologies: "React-Native, React, Firebase",
    image: "/projects/yofare.png",
    longDescription:
      'From constant interactions with drivers, passengers, and those wanting to join the hailing service. Many talked about the high commissions, unfair estimates in most times favoring customers, can\'t find my address all the time. We discovered a gap in the sector that we could address with a very simple but innovative solution, hence the birth of Yofare. When we introduced the idea of what we were thinking to passengers and drivers, everyone was like "Duh, why is that not existing already!". since then we have kept the momentum to revolutionize the ride hailing in Africa.',
    link: "https://yofare.com/",
    color: "#222999",
    textColor: "#fff",
    github: "https://github.com/kigh143",
    isPersonal: true,
    category: "mobile",
    description:
      "YoFare is changing the way we move by seamlessly making Urban and Rural travel more affordable and convenient. Just give your price and just by a tap of a button, travelers get to drivers through our app.",
    website: "https://yofare.com/",
  },
  {
    name: "Contaks",
    period: "1 month",
    type: "Personal projects",
    role: "Full-Stack",
    technologies: "React-Native, React, Nodejs, Firebase",
    image: "/projects/contaks.png",
    description:
      "An application built to help you organize you =r contacts list / phone book in accordance to what your contacts are doing professionally. Connect with professionals and get the help you need right from the people you already know. ",
    link: "https://contaks-356315.web.app/",
    color: "#45a553",
    textColor: "#fff",
    github: "https://github.com/kigh143",
    isPersonal: true,
    category: "mobile",
    longDescription: "",
    website: "https://contaks-356315.web.app/",
  },
  {
    name: "Ahindi",
    period: "8 months",
    type: "contract",
    role: "Front End Dev",
    technologies: "React-Native, React, Firebase",
    image: "/projects/a.png",
    description:
      "A monitoring system for ensuring the safety and rights of externalized workers. It protects migrant workers worldwide by tracking. Migrant workers can regularly communicate updates",
    link: "https://www.ahindiapp.com",
    color: "#0c76fc",
    textColor: "#fff",
    github: "https://github.com/kigh143",
    isPersonal: false,
    category: "mobile",
    longDescription: "",
    website: "https://www.ahindiapp.com",
  },
  {
    name: "Danapay",
    period: "present",
    type: "Full Time",
    role: "Front End Dev",
    technologies: "React-Native, React, FastLane, CircleCi, Firebase FCM",
    image: "/projects/danapay.png",
    description:
      "Danapay offers a blockchain based money transfer app that offers convenient remittance transactions at attractive rates. They specialize in wire transfers between Europe",
    link: "https://www.danapay.io",
    color: "#2aa7b8",
    textColor: "#fff",
    github: "https://github.com/kigh143",
    isPersonal: false,
    category: "mobile",
    longDescription: "",
    website: "https://www.danapay.io",
  },
  {
    name: "Pulida Wo",
    period: "1.5 months",
    type: "contract",
    role: "Front End Dev",
    technologies: "React native, React, Fastlane, CircleCi, Firebase FCM",
    image: "/projects/p.png",
    description:
      "The PulidaWo App aims to narrow gap in legal aid delivery. Pulidawo operates on the framework of a two-sided marketplace for accessing Pro Bono legal aid/case across the country",
    link: "https://www.pulidawo.io",
    color: "blue",
    textColor: "#fff",
    github: "https://github.com/kigh143",
    category: "mobile",
    longDescription: "",
    isPersonal: false,
    website: "https://www.pulidawo.io",
  },
  {
    name: "MiCards",
    period: "2 months",
    type: "Personal",
    role: "Front End Dev",
    technologies: "React-Native, ReduxToolkit",
    image: "/projects/micards.jpg",
    description:
      "An offline digital wallet for all your bank cards. There is no need to carry your cards everywhere if you are not going to use them. Add them to Mi-Cards for easy access.",
    link: "https://play.google.com/store/apps/details?id=com.micards",
    color: "#fff",
    textColor: "#333",
    github: "https://github.com/kigh143",
    isPersonal: true,
    category: "mobile",
    longDescription: "",
    website: "https://play.google.com/store/apps/details?id=com.micards",
  },
];

const Projects: NextPage = () => {
  const [selected, setSelected] = useState("all");
  const [all_projects, setAllProjects] = useState(projects);

  const change = (text: string) => {
    setSelected(text);
    if (text === "all") {
      setAllProjects(projects);
    } else {
      const results =
        text === "personal"
          ? projects.filter((project) => project.isPersonal)
          : projects.filter((project) => !project.isPersonal);
      setAllProjects(results);
    }
  };

  useEffect(() => {
    LogRocket.init("aqa6tz/ghkatende");
  }, []);

  return (
    <>
      <Header
        title={"Katende's case studies and Projects"}
        description={
          "Coding & Designing mobile and web apps, I currently work as a remote Full stack engineer, Working on both website and Mobile application in different domain."
        }
        keywords={
          "React Native, Firebase, React js, Node js, MongoDb, ReduxToolkit, Mobile Developer, Web Developer, Uganda, Kampala"
        }
      />
      <section className="bg-gray-100 pt-7 pb-7">
        <div className="container px-8 mx-auto sm:px-12 lg:px-20 flex flex-row justify-between items-center">
          <div>
            <h2 className="font-bold">Projects and case studies</h2>
            <small className="text-gray-500">
              Coding & Designing mobile and web apps
            </small>
          </div>
          <div>
            <a
              onClick={() => change("all")}
              className={`cursor-pointer ${
                selected === "all" ? "text-blue-500" : "text-gray-500 "
              } font-bold mr-4`}
            >
              <small>All</small>
            </a>
            <a
              onClick={() => change("work")}
              className={`cursor-pointer ${
                selected === "work" ? "text-blue-500" : "text-gray-500 "
              } font-bold mr-4`}
            >
              <small>Work Related</small>
            </a>
            <a
              onClick={() => change("personal")}
              className={`cursor-pointer  ${
                selected === "personal" ? "text-blue-500" : "text-gray-500 "
              } font-bold`}
            >
              <small>Personal Projects</small>
            </a>
          </div>
        </div>
      </section>
      {all_projects.map((item, index) => (
        <Project key={index} project={item} index={index} />
      ))}
      <Footer />
    </>
  );
};

export default Projects;
