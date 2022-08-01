import React, { useState } from "react";
import type { NextPage } from "next";
import Link from "next/link";

type Props = {
  project: {
    name: string;
    isPersonal: boolean;
    description: string;
    technologies: string;
    github: string;
    website: string;
    image: string;
    color: string;
    textColor: string;
    period: string;
    role: string;
    type: string;
    category: string;
    longDescription?: string;
  };
  index: number;
};

const Project: NextPage<Props> = ({ project, index }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section
      className={`py-20 ${index % 2 === 0 ? "bg-gray-200" : "bg-white"}`}
    >
      <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
        <div
          className={`flex flex-wrap items-center -mx-3 ${
            index % 2 === 0 ? "flex-row-reverse" : ""
          } `}
        >
          <div className="order-1 w-full px-3 lg:w-1/2 lg:order-0">
            <div className="w-full lg:max-w-md">
              <h2
                className="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading"
                style={{ color: project.color }}
              >
                {project.name}
              </h2>
              <p className="mb-4 font-medium tracking-tight text-gray-400 xl:mb-6">
                {project.description}
              </p>
              <ul>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <span className="font-medium text-gray-500">
                    {project.role} ({project.type})
                  </span>
                </li>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <span className="font-medium text-gray-500">
                    {project.technologies}
                  </span>
                </li>
                <li className="flex items-center py-2 space-x-4 xl:py-3">
                  <span className="font-medium text-gray-500">
                    {project.period}
                  </span>
                </li>
              </ul>
              <a onClick={() => setShowMore((prev) => !prev)}>
                Read {showMore ? "Less" : "More"}
              </a>
            </div>
          </div>

          <div className="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0">
            <img
              className="mx-auto sm:max-w-sm lg:max-w-full"
              src={project.image}
              alt={project.name}
            />
          </div>
        </div>
      </div>
      {showMore && (
        <div className="container items-center max-w-6xl px-4 px-10 mx-auto sm:px-20 md:px-32 lg:px-16 pt-8">
          <h1>More</h1>
          <p>{project?.longDescription}</p>
        </div>
      )}
    </section>
  );
};

export default Project;
