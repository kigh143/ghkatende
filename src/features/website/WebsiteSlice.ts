import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  projects: [
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
      image: "./images/projects/keeptabs.png",
      description:
        "An offline digital wallet for all your bank cards. There is no need to carry your cards everywhere if you are not going to use them. Add them to Mi-Cards for easy access. ",
      link: "https://play.google.com/store/apps/details?id=com.micards",
      color: "#a2d2ff",
      textColor: "#333",
      github: "https://github.com/kigh143",
    },
  ],
};

const websiteSlice = createSlice({
  name: "website",
  initialState,
  reducers: {},
});

export const {} = websiteSlice.actions;
export default websiteSlice.reducer;
