import React from "react";

const Logos = () => {
  const logos = [
    {
      name: "Javascript",
    },
    {
      name: "NodeJs",
    },
    {
      name: "PHP",
    },

    {
      name: "MySQL",
    },
    {
      name: "React",
    },
    {
      name: "React Native",
    },

    {
      name: "React testing Library",
    },
    {
      name: "Codeiginter",
    },
    {
      name: "Laravel",
    },
    {
      name: "Express",
    },
    {
      name: "Fastlane",
    },
  ];
  return (
    <div className="py-6 logoBG">
      <div className="logos container">
        {logos.length > 0 &&
          logos.map((logo) => {
            return <p className="circle">{logo.name}</p>;
          })}
      </div>
    </div>
  );
};

export default Logos;
