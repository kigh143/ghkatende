import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styles from "../styles/Home.module.css";

const Retooling: NextPage = () => {
  return (
    <>
      <Header title={""} description={""} keywords={""} />
      <section className="relative bg-purple-900">
        <div className="absolute inset-0 flex justify-end w-full h-full overflow-hidden opacity-50">
          <img
            src="https://cdn.devdojo.com/images/july2021/block-pattern.png"
            className="absolute inset-0 object-cover w-full h-full opacity-30"
          />
        </div>
        <div className="relative flex flex-col px-16 py-16 mx-auto max-w-7xl bg-gradient-to-r lg:flex-row from-transparent via-purple-900 to-transparent">
          <img
            src="https://cdn.devdojo.com/images/july2021/magic-mesh.png"
            className="absolute opacity-50"
          />

          <div className="relative flex flex-col w-full mb-16 lg:mb-0 lg:w-2/3 sm:justify-center sm:items-center sm:text-center lg:text-left lg:items-start">
            <p className="mb-4 font-mono text-sm font-bold tracking-wide text-purple-300 uppercase">
              Retooling
            </p>
            <h1 className="mb-8 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
              Retooling, Lets build software
            </h1>
            <p className="max-w-xl mx-auto mb-8 text-purple-200 sm:text-lg lg:text-xl lg:pr-20 lg:max-w-none lg:mx-0">
              We use real-world contexts to teach programming and
              problem-solving to youths.
            </p>
            <a
              href="#_"
              className="inline-flex items-center justify-center w-full px-6 py-4 mb-3 mr-1 text-base font-semibold text-white no-underline align-middle bg-purple-600 border border-transparent border-solid rounded-md cursor-pointer select-none sm:max-w-xl sm:mb-0 lg:w-auto hover:bg-purple-500 hover:text-white focus-within:bg-blue-700 focus-within:border-blue-700"
            >
              <span>Join</span>
              <span className="ml-1 text-sm font-light">
                {" "}
                - It's Never Late
              </span>
            </a>
          </div>
          <div className="relative flex items-center justify-center w-full max-w-xl mx-auto lg:w-1/2">
            <img
              src="https://cdn.devdojo.com/images/july2021/3d-character.png"
              className="w-full h-auto xl:pr-5 lg:translate-y-5"
            />
          </div>
        </div>
      </section>

      <section className="w-full px-8 pt-20 pb-16 bg-white xl:px-0">
        <div className="flex flex-col flex-row-reverse items-start max-w-6xl mx-auto md:flex-row">
          <h3 className="w-full text-4xl font-extrabold tracking-normal text-gray-900 sm:text-5xl md:text-5xl md:pr-10 lg:pr-16 xl:pr-20 md:leading-none md:-mt-2 md:w-1/2">
            building tomorrow's software developers
          </h3>
          <div className="flex flex-col w-full mt-8 space-y-5 md:w-1/2 md:space-y-10 md:mt-0">
            <p className="col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-8 md:text-xl">
              In Retooling, students learn how to code and solve real-world
              problems using a project-based learning paradigm. we embrace
              Collaboration as its key to our success. Students work together on
              projects in order to share knowledge.
            </p>

            <p className="col-span-6 text-base font-normal text-gray-700 lg:leading-8 xl:leading-9 md:text-xl">
              Our teaching method is powerful and has extensive benefits for
              students, ranging from critical thinking to project management and
              self-confidence. We focus how energy on solving problems facing
              our communities as we learn.
            </p>
          </div>
        </div>
      </section>

      <section className="flex flex-col w-full bg-black md:flex-row">
        <div className="flex flex-col items-center justify-center w-full p-10 md:w-1/2 lg:p-16 xl:p-24">
          <h2 className="max-w-lg text-4xl font-light leading-tight text-white md:text-3xl lg:text-4xl xl:text-5xl">
            We have the tools you need to succeed
          </h2>
          <p className="max-w-lg mt-5 text-xl text-gray-500 md:text-base lg:text-xl">
            Our powerful and revolutionary approach has been designed to help
            you build scalable software.
          </p>
        </div>

        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.devdojo.com/images/november2020/tools-bg.jpeg?q=75&amp;auto=format"
            className="inset-0 object-cover"
          />
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="px-8 mx-auto max-w-7xl lg:px-16">
          <h2 className="mb-4 text-xl font-bold md:text-3xl">What to expect</h2>
          <div className="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-16">
            <div>
              <h5 className="mt-10 mb-3 font-semibold text-gray-900">
                Collaboration
              </h5>
              <p>
                Relationships formed during collaboration is a huge part of
                Retooling. You might be expected to form relationships with
                community members when working on projects.
              </p>
              <h5 className="mt-10 mb-3 font-semibold text-gray-900">
                Problem Solving
              </h5>
              <p>
                You will learn how to solve problems that are important to you,
                including real community issues, more effectively—even learning
                from failure and possibly starting over.
              </p>
              <h5 className="mt-10 mb-3 font-semibold text-gray-900">
                Creativity
              </h5>
              <p>
                You will apply creative thinking skills to innovate new product
                designs and possibilities for projects. You might also have to
                explore you curiosities..
              </p>
            </div>
            <div>
              <h5 className="mt-10 mb-3 font-semibold text-gray-900">
                Critical Thinking
              </h5>
              <p>
                You will learn to look at problems with a critical thinking
                lens, asking questions and coming up with possible solutions to
                the project.
              </p>
              <h5 className="mt-10 mb-3 font-semibold text-gray-900">
                Project Management
              </h5>
              <p>
                you will learn how to manage projects and assignments more
                efficiently.
              </p>

              <h5 className="mt-10 mb-3 font-semibold text-gray-900">
                In-Depth Understanding
              </h5>
              <p>
                You will build on the research skills and deepen your learning
                of applied content beyond facts or memorization.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Retooling;
