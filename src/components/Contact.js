import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const connections = [
    {
      name: "StackOverFlow",
      icon: "stack-overflow",
      color: "orange",
      link: "https://stackoverflow.com/users/4789428/ghkatende",
    },
    {
      name: "GitHub",
      icon: "github-square",
      color: "white",
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
      name: "FreeCodeCamp",
      icon: "free-code-camp",
      color: "white",
      link: "https://www.freecodecamp.org/ghkatende1",
    },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(
        "service_ncvgio7",
        "template_cq5m8j8",
        e.target,
        "user_H2xMonzuSTVTtlZFH2Uip"
      )
      .then(
        (result) => {
          formRef.current.reset();
          setLoading(false);
          setSent(true);
        },
        (error) => {
          console.log(error.text);
          setLoading(false);
        }
      );
  };

  return (
    <section
      id={`contact`}
      style={{ backgroundColor: "#212529", paddingTop: 60, paddingBottom: 60 }}
    >
      <div className="container">
        <div className="row align-items-md-stretch">
          <div className="col-md-6">
            <div className="h-100 p-5 text-white bg-dark rounded-3">
              <h2>Let's talk</h2>
              <p>
                If you’d like to get in touch with me, whether to hire me,
                request additional contact information, or just to say hi, you
                can contact me using the form or my e-mail address:{" "}
                <b>ghkatende @ gmail . com</b>
              </p>
              <hr />
              <div className="row">
                {connections.map((connection) => (
                  <a
                    className="col-md-3  col-sm-3  col-xs-4 text-center"
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      cursor: "pointer",
                      marginBottom: 20,
                    }}
                    href={connection.link}
                    target="_blank"
                  >
                    <i
                      className={`fa fa-${connection.icon}`}
                      style={{
                        fontSize: 35,
                        marginBottom: 5,
                        color: connection.color,
                      }}
                    ></i>
                    <p>
                      <small>{connection.name}</small>
                    </p>
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="h-100 p-5 bg-light border rounded-3">
              <h2>Send a message</h2>
              <form className="contact-form" onSubmit={sendEmail} ref={formRef}>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Full Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="user_name"
                  />
                </div>
                <div className="mb-3">
                  <label for="exampleFormControlInput1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleFormControlInput1"
                    name="email"
                  />
                </div>
                <input
                  type="hidden"
                  className="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  name="user_email"
                  value="ghkatende@gmail.com"
                />
                <div className="mb-3">
                  <label
                    for="exampleFormControlTextarea1"
                    className="form-label"
                  >
                    Type your message
                  </label>
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    name="message"
                  ></textarea>
                </div>
                {loading ? (
                  <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Please wait...</span>
                  </div>
                ) : (
                  <input
                    type="submit"
                    value="Send"
                    value="Send Message"
                    className="btn btn-primary"
                  />
                )}
                {sent ? <p>Your message has been sent!</p> : null}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
