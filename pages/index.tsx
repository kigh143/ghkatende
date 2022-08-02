import React, { useRef } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";

const experience = [
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
];

const colorArray = [
  "#FF6633",
  "#000",
  "#4DB380",
  "#FF4D4D",
  "gray",
  "#6666FF",
  "#FF6633",
  "#000",
  "#4DB380",
  "#FF4D4D",
  "gray",
  "#6666FF",
  "#4DB380",
];

const connect = [
  {
    name: "StackOverFlow",
    icon: "stack-overflow",
    color: "orange",
    link: "https://stackoverflow.com/users/4789428/ghkatende",
  },
  {
    name: "GitHub",
    icon: "github-square",
    color: "gray",
    link: "https://github.com/kigh143",
  },
  {
    name: "LinkedIn",
    icon: "linkedin-square",
    color: "#0e76a8",
    link: "https://www.linkedin.com/in/hakim-katende-710375148/",
  },
  {
    name: "Facebook",
    icon: "facebook-square",
    color: "#4285F4",
    link: "https://www.facebook.com/ghkatende",
  },
  {
    name: "HashNode",
    icon: "globe",
    color: "#4285F4",
    link: "https://ghkatende.hashnode.dev/",
  },
  {
    name: "Hashnode",
    icon: "globe",
    color: "#4285F4",
    link: "https://www.facebook.com/ghkatende",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Header
        title={"Hakim Katende's Website"}
        description={
          "Ugandan based experienced software developer who specializes in developing web applications and mobile apps."
        }
        keywords={"Uganda, Kampala, Software Developer, Full Stack Developer, React Native, React Js, Node Js, Firebase, MongoDb, ReduxToolkit, Mobile Developer, Web Developer"}
      />
      <section className="bg-gray-100">
        <div className="flex flex-col-reverse items-center justify-center max-w-5xl px-10 pt-16 mx-auto md:flex-row md:space-x-20 lg:space-x-32 md:pt-24">
          <div className="box-content relative flex items-start justify-center flex-shrink-0 pb-16 border-2 border-b-0 border-green-500 w-80 rounded-t-3xl h-96">
            <div className="absolute z-20 h-8 mx-auto bg-white w-44 rounded-b-xl"></div>
            <div className="absolute w-full h-full p-3 pb-0">
              <div
                className="box-content relative z-10 w-full h-full bg-green-400 rounded-t-xl"
                style={{
                  backgroundImage: "url('/hakim.png')",
                  backgroundPositionY: "center",
                }}
              ></div>
            </div>
          </div>
          <div className="flex flex-col items-start w-full h-full max-w-xs pb-10 space-y-5 md:pb-0 md:max-w-none">
            <h2 className="text-5xl font-black text-gray-900">
              I'm Katende Hakim
            </h2>
            <p className="text-lg text-gray-500">
              Ugandan based experienced software developer who specializes in
              developing web applications and mobile apps.
            </p>
            <a
              href="mailto:ghkatende@gmail.com"
              className="flex items-center px-4 py-2 font-medium text-gray-900 border-2 border-gray-900 rounded-lg"
            >
              Get in Touch
              <svg
                className="w-4 h-4 ml-1 -mr-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9 5l7 7-7 7"
                ></path>
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-white pt-7 pb-7">
        <div className="container px-8 mx-auto sm:px-12 lg:px-20">
          <div className="flex grid items-center justify-center grid-cols-4 grid-cols-12 gap-y-8">
            {connect.map((item, index) => (
              <a
                href={item.link}
                target="_blank"
                className="cursor-pointer flex flex-col items-center justify-center col-span-6 sm:col-span-4 md:col-span-3 xl:col-span-2"
              >
                <i
                  className={`fa fa-${item.icon} text-4xl mb-2`}
                  style={{ fontSize: 25, color: item.color }}
                ></i>
                <small>{item.name}</small>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full px-8 pt-20 pb-16 bg-gray-900 xl:px-0">
        <div className="flex flex-col items-start max-w-6xl mx-auto md:flex-row">
          <div className="w-full  md:-mt-2 md:w-1/2">
            <h3 className="text-3xl font-extrabold tracking-normal text-gray-200 sm:text-5xl md:text-5xl md:pr-10 lg:pr-16 xl:pr-20 md:leading-none">
              Full-Stack Front-End Heavy Developer
            </h3>
            <div className="flex flex-row flex-wrap py-4 pr-8">
              {experience.map((exp, index) => (
                <span
                  style={{
                    backgroundColor: colorArray[index],
                    borderRadius: 100,
                  }}
                  className="py-1 px-5 text-white mx-2 my-2"
                >
                  {exp}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0">
            <p className="col-span-6 text-sm font-normal text-gray-100 lg:leading-8 xl:leading-8 md:text-xl">
              I'm a mobile and web developer based in uganda, with experience
              and passion in the sector. As a result of my education and
              experience, I have gained the knowledge and skills necessary to
              build scalable software products. I enjoy every step of the
              software development life cycle.
            </p>

            <p className="col-span-6 text-sm font-normal text-gray-100 lg:leading-8 xl:leading-8 md:text-xl">
              Detailed software requirements are my favorite part of my job, but
              I can also work comfortably in an agile environment, collaborating
              directly with product managers, designers, and other developers.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
          <div className="flex flex-wrap items-center -mx-3">
            <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
              <div className="w-full lg:max-w-md">
                <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">
                  Coding & Designing mobile and web apps
                </h2>

                <ul>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <span className="font-medium text-gray-500">
                      Product (Mobile & Web App )Design
                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <span className="font-medium text-gray-500">
                      UI and UX Design
                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <span className="font-medium text-gray-500">
                      Project Management
                    </span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <span className="font-medium text-gray-500">SEO</span>
                  </li>
                  <li className="flex items-center py-2 space-x-4 xl:py-3">
                    <span className="font-medium text-gray-500"></span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
              <img
                className="mx-auto sm:max-w-sm lg:max-w-full"
                src="/services.png"
                alt="feature image"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-100">
        <div className="flex flex-col items-center justify-between px-12 mx-auto text-left md:px-8 lg:px-16 lg:flex-row max-w-7xl">
          <div className="relative mb-6 space-y-4 md:space-y-1 lg:pr-20 lg:mb-0 lg:text-left lg:space-y-3">
            <p className="flex items-center justify-start text-base font-semibold text-green-500">
              G .Katende Hakim
              <svg
                className="w-4 h-4 ml-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                ></path>
              </svg>
            </p>
            <h2 className="text-4xl font-normal tracking-tight md:text-3xl md:leading-tight xl:text-4xl">
              I'm Social, Let's connect
            </h2>
            <p className="text-base font-medium text-gray-500 sm:text-sm xl:text-base">
              E-mail at ghkatende @ gmail [.] com send a message through my
              contact form [ the fastest way to connect me].
            </p>
          </div>
          <div className="flex w-full sm:w-auto xl:inline-flex">
            <a
              href="mailto:ghkatende@gmail.com"
              className="inline-flex items-center justify-center w-full px-5 py-3 text-base font-medium text-white bg-green-600 border border-transparent rounded-md shadow md:w-auto hover:bg-green-700"
            >
              Get in Touch
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
