import React from "react";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Logos from "../components/Logos";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const HomeScreen = () => {
  return (
    <>
      <Header />
      <Skills />
      <Contact />
      <Projects />
      <Footer />
    </>
  );
};

export default HomeScreen;
