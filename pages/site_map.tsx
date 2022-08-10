import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Retooling: NextPage = () => {
  return (
    <>
      <Header
        title={"Retooling"}
        description={
          "Students learning how to code and solve real-world problems using a project-based learning paradigm."
        }
        keywords={
          "Coding, Retooling, Project-based learning,Collaboration, Problem-solving,Critical Thinking,In-Depth Understanding, Project Management"
        }
      />

      <Footer />
    </>
  );
};

export default Retooling;
