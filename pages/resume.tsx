import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const Resume: NextPage = () => {
  return (
    <>
      <Header title={""} description={""} keywords={""} />
      <Footer />
    </>
  );
};

export default Resume;
