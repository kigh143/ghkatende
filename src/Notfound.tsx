import React from "react";
import { Link } from "react-router-dom";
const Notfound: React.FC = () => {
  return (
    <div
      style={{ backgroundColor: "black", height: "100vh", color: "#fff" }}
      className="flex justify-center items-center flex-column"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-6 text-center p-8 border-double border-gray-300 border-2">
            <h2 className="mb-4 display-6">Ghkatende</h2>
            <p className="mb-4">
              This site hosts a variety of things <b>professional</b> and{" "}
              <b>Personal</b>; about <b>who I am</b>, why I{" "}
              <b>love what I do</b>.
            </p>
            <Link to="/" className="btn btn-outline-success btn-lg px-4">
              Go to Ghkatende
            </Link>
          </div>
          <div className="col-md-6 text-center p-8">
            <h2 className="mb-4 display-6 ">Re-Tooling</h2>
            <p className="mb-4">
              Do you want to learn how to Code or become a Better Developer and
              Entrepreneur, Take the first step to learn with Retooling,.
            </p>
            <Link to="/retooling" className="btn btn-success btn-lg px-4">
              Go to Re-Tooling
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notfound;
