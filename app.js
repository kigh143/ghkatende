gsap.registerPlugin(ScrollTrigger);
var projects_collection = [
  {
    name: "Addressya",
    period: "8 months",
    type: "contract",
    role: "Front End Dev",
    technologies: "React-Native, React, Nodejs, Firebase",
    image: "./images/projects/addressya.jpg",
    description:
      "Addressya is solving one of the largest pains of businesses; finding, and being found, by their customers. We save valuable time, costs for the delivery, unnecessary refunds, ",
    link: "https://www.addressaya.com",
    color: "#45a553",
    textColor: "#fff",
    github: "https://github.com/kigh143",
  },
  {
    name: "Ahindi",
    period: "8 months",
    type: "contract",
    role: "Front End Dev",
    technologies: "React-Native, React, Firebase",
    image: "./images/projects/ahindi.jpg",
    description:
      "A monitoring system for ensuring the safety and rights of externalized workers. It protects migrant workers worldwide by tracking. Migrant workers can regularly communicate updates",
    link: "https://www.ahindiapp.com",
    color: "#0c76fc",
    textColor: "#fff",
    github: "https://github.com/kigh143",
  },
  {
    name: "Danapay",
    period: "8 months",
    type: "contract",
    role: "Front End Dev",
    technologies: "React-Native, React, Fastlane, CircleCi, Firebase FCM",
    image: "./images/projects/danapay.jpg",
    description:
      "Danapay offers a blockchain based money transfer app that offers convenient remittance transactions at attractive rates. They specialize in wire transfers between Europe",
    link: "https://www.danapay.io",
    color: "#2aa7b8",
    textColor: "#fff",
    github: "https://github.com/kigh143",
  },
  {
    name: "Pulida Wo",
    period: "1.5 months",
    type: "contract",
    role: "Front End Dev",
    technologies: "React native, React, Fastlane, CircleCi, Firebase FCM",
    image: "./images/projects/pulidawo.jpg",
    description:
      "The PulidaWo App aims to narrow gap in legal aid delivery. Pulidawo operates on the framework of a two-sided marketplace for accessing Pro Bono legal aid/case across the country",
    link: "https://www.pulidawo.io",
    color: "blue",
    textColor: "#fff",
    github: "https://github.com/kigh143",
  },
  {
    name: "MiCards",
    period: "2 months",
    type: "Personal",
    role: "Front End Dev",
    technologies: "React-Native, ReduxToolkit",
    image: "./images/projects/micards.jpg",
    description:
      "An offline digital wallet for all your bank cards. There is no need to carry your cards everywhere if you are not going to use them. Add them to Mi-Cards for easy access.",
    link: "https://play.google.com/store/apps/details?id=com.micards",
    color: "#e9edc9",
    textColor: "#333",
    github: "https://github.com/kigh143",
  },
  {
    name: "KeepTabs",
    period: "2 weeks",
    type: "Personal",
    role: "Front End Dev",
    technologies: "React Js, Tailwind CSS, ",
    image: "./images/projects/keeptabs.jpg",
    description:
      "An offline digital wallet for all your bank cards. There is no need to carry your cards everywhere if you are not going to use them. Add them to Mi-Cards for easy access. ",
    link: "https://play.google.com/store/apps/details?id=com.micards",
    color: "#a2d2ff",
    textColor: "#333",
    github: "https://github.com/kigh143",
  },
];
var html = "";
projects_collection.forEach((element, index) => {
  var innerHtml = `<section id="project" style="background:${
    element.color
  }; color:${element.textColor};" class="py-2">
              <div class="container col-xxl-8 px-4">
                  <div class="mobo">
                  <h2>Project ${index + 1}</h2>
                  </div>
                  <div class="row flex-lg-row-reverse align-items-center g-5">
                      <div class="col-lg-6">
                          <img src="${
                            element.image
                          }" class="projectImg shadow-md" alt="${
    element.name
  }"  loading="lazy">
                      </div>
                      <div class="col-lg-6">
                          <h1 class="display-5 fw-bold lh-1 mb-3">${
                            element.name
                          }</h1>
                          <br/>
                          <p class="lead">${element.role}</p> 
                          <br/>
                          <p class="lead">${element.description}</p> <br/>
                          <p class="lead">${element.technologies}</p>
                          <div class="d-grid gap-2 d-md-flex justify-content-md-start pt-6">
                          <button type="button" class="btn btn-success btn-lg px-4 me-md-2">Source Code</button>
                          <button type="button" class="btn btn-light btn-lg px-4">Demo Project</button>
                          </div>
                      </div>
                  </div>
              </div>
          </section>`;
  html += innerHtml;
});
document.querySelector("#casestudy").innerHTML = html;

gsap.utils.toArray("#project").forEach((element, index) => {
  ScrollTrigger.create({
    trigger: element,
    start: "top top",
    pin: true,
    pinSpacing: false,
  });
});
