import React from "react";

const Footer = () => {
  return (
    <div className="bg-dark text-secondary px-4 py-5 text-center">
      <div className="py-5">
        <h4 className="display-5 fw-bold text-white">Thank for passing by</h4>
        <div className="col-lg-6 mx-auto">
          <p className="fs-5 mb-4"></p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button
              type="button"
              className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold"
            >
              Lets Talk
            </button>
            <button type="button" className="btn btn-outline-light btn-lg px-4">
              Hire Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
