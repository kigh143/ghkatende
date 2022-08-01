import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Project from "../components/Project";
import styles from "../styles/Home.module.css";

const projects = [
  {
    name: "Addressya",
    period: "8 months",
    type: "contract",
    role: "Front End Dev",
    technologies: "React-Native, React, Nodejs, Firebase",
    image: "./images/projects/addressya.png",
    description:
      "Addressya is solving one of the largest pains of businesses; finding, and being found, by their customers. We save valuable time, costs for the delivery, unnecessary refunds, ",
    link: "https://www.addressaya.com",
    color: "#45a553",
    textColor: "#fff",
    github: "https://github.com/kigh143",
    isPersonal: true,
    category: "mobile",
  },
  {
    name: "Yofare",
    period: "2 months",
    type: "Personal Project",
    role: "Full-Stack",
    technologies: "React-Native, React, Firebase",
    image: "./images/projects/addressya.png",
    description:
      "Addressya is solving one of the largest pains of businesses; finding, and being found, by their customers. We save valuable time, costs for the delivery, unnecessary refunds, ",
    link: "https://yofare.com/",
    color: "#45a553",
    textColor: "#fff",
    github: "https://github.com/kigh143",
    isPersonal: true,
    category: "mobile",
  },
  {
    name: "Contaks",
    period: "1 month",
    type: "Personal projects",
    role: "Full-Stack",
    technologies: "React-Native, React, Nodejs, Firebase",
    image: "./images/projects/addressya.png",
    description:
      "Addressya is solving one of the largest pains of businesses; finding, and being found, by their customers. We save valuable time, costs for the delivery, unnecessary refunds, ",
    link: "https://www.addressaya.com",
    color: "#45a553",
    textColor: "#fff",
    github: "https://github.com/kigh143",
    isPersonal: true,
    category: "mobile",
  },
  {
    name: "Ahindi",
    period: "8 months",
    type: "contract",
    role: "Front End Dev",
    technologies: "React-Native, React, Firebase",
    image: "./images/projects/a.png",
    description:
      "A monitoring system for ensuring the safety and rights of externalized workers. It protects migrant workers worldwide by tracking. Migrant workers can regularly communicate updates",
    link: "https://www.ahindiapp.com",
    color: "#0c76fc",
    textColor: "#fff",
    github: "https://github.com/kigh143",
    isPersonal: true,
    category: "mobile",
  },
  {
    name: "Danapay",
    period: "present",
    type: "Full Time",
    role: "Front End Dev",
    technologies: "React-Native, React, Fastlane, CircleCi, Firebase FCM",
    image: "./images/projects/danapay.png",
    description:
      "Danapay offers a blockchain based money transfer app that offers convenient remittance transactions at attractive rates. They specialize in wire transfers between Europe",
    link: "https://www.danapay.io",
    color: "#2aa7b8",
    textColor: "#fff",
    github: "https://github.com/kigh143",
    isPersonal: true,
    category: "mobile",
  },
  {
    name: "Pulida Wo",
    period: "1.5 months",
    type: "contract",
    role: "Front End Dev",
    technologies: "React native, React, Fastlane, CircleCi, Firebase FCM",
    image: "./images/projects/p.png",
    description:
      "The PulidaWo App aims to narrow gap in legal aid delivery. Pulidawo operates on the framework of a two-sided marketplace for accessing Pro Bono legal aid/case across the country",
    link: "https://www.pulidawo.io",
    color: "blue",
    textColor: "#fff",
    github: "https://github.com/kigh143",
    category: "mobile",
  },
  {
    name: "MiCards",
    period: "2 months",
    type: "Personal",
    role: "Front End Dev",
    technologies: "React-Native, ReduxToolkit",
    image: "./images/projects/micards.jpg",
    description:
      "An offline digital wallet for all your bank cards. There is no need to carry your cards everywhere if you are not going to use them. Add them to Mi-Cards for easy access.",
    link: "https://play.google.com/store/apps/details?id=com.micards",
    color: "#fff",
    textColor: "#333",
    github: "https://github.com/kigh143",
    isPersonal: true,
    category: "mobile",
  },
];

const Projects: NextPage = () => {
  return (
    <>
      <Header title={""} description={""} keywords={""} />
      {projects.map((item, index) => (
        <Project key={index} project={item} index={index} />
      ))}
      <Footer />
    </>
  );
};

export default Projects;
