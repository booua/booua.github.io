import React from "react";

export const ProjectsList = {
  smogbar: {
    id: "smogbar",
    title: "SMOGbar",
    image: "/img/smogbar/smogbar.png",
    imageWide: "/img/smogbar/smogbarMock.png",
    logo: "/img/smogbar/logo.png",
    imageAlt:
      "https://raw.githubusercontent.com/booua/smogbar/master/src/images/screenshotdark.png",
    content: () => {
      return (
        <div>
          {" "}
          An awesome, little menubar app for checking out air quality near you!{" "}
          <br></br>
          <a
            style={{ fontSize: "1.4rem", color: "white" }}
            href="https://github.com/booua/smogbar"
          >
            CHECK IT OUT!
          </a>
        </div>
      );
    },
    link: "https://github.com/booua/smogbar",
  },
  electronCMS: {
    id: "electronCMS",
    title: "Electron CMS",
    image: "/img/electroncms/electroncms1.png",
    imageWide: "/img/electroncms/electronCMSMock.png",
    imageAlt: "/img/electroncms/electronCMSMock.png",
    content: () => {
      return (
        <div>
          {" "}
          Simple content management system developed for a client, based on
          Electron JS framework
        </div>
      );
    },
  },

  cern_eamlight: {
    id: "cern_eamlight",
    title: "CERN EAMLight",
    image: "/img/eamlight/eamlight.png",
    imageWide: "/img/eamlight/eamlightMock.png",
    imageAlt: "/img/eamlight/eamlightalt.png",
    content: () => {
      return (
        <div>
          EAM Light is a multi-layer web application for which the front-end has
          been developed in ReactJS and the back-end in JavaEE, which in turn is
          using the EAM WS Hub Core for all communication with Infor EAM.
          <br></br> The EAM Light application is fully based on the business
          logic and access rights in Infor EAM which means that the light-weight
          interface can benefit from the configuration capabilities of the
          underlying system.
          <a
            style={{ fontSize: "1.4rem", color: "white" }}
            href="https://github.com/cern-eam/eam-light-frontend"
          >
            CHECK IT OUT!
          </a>
        </div>
      );
    },
    link: "https://github.com/cern-eam/eam-light-frontend",
  },
  neuroevolution: {
    id: "neuroevolution",
    title: "Neuroevolution Chrome Dino",
    image: "/img/neuroevolution/neuroevolution.png",
    imageWide: "/img/neuroevolution/neuroevolution.png",
    imageAlt: "/img/neuroevolution/neuroevolution.png",
    content: () => {
      return (
        <div>
          Neuroevolution exercise/project based on an offline chrome dino game.
          <a
            style={{ fontSize: "1.4rem", color: "white" }}
            href="https://github.com/booua/chrome_dino_neuroevolution"
          >
            CHECK IT OUT!
          </a>
        </div>
      );
    },
  },
  aeplay: {
    id: "aeplay",
    title: "AE Play Website",
    image: "/img/aeplay/aeplay.png",
    imageWide: "/img/aeplay/aeplay.png",
    // imageAlt: "/img/aeplay/aeplay.png",
    content: () => {},
  },
  // deskPC: {
  //   id: "deskPC",
  //   title: "Desk PC",
  //   image:
  //     "https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  //   imageWide:
  //     "https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  // },
  // project6: {
  //   id: "test6",
  //   title: "project6",
  //   image:
  //     "https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  //   imageWide:
  //     "https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  // },
  // project7: {
  //   id: "test7",
  //   title: "project7",
  //   image:
  //     "https://images.unsplash.com/photo-1602529830721-dc2928e84014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  //   imageWide:
  //     "https://images.unsplash.com/photo-1602529830721-dc2928e84014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  // },
  // project8: {
  //   id: "test8",
  //   title: "project8",
  //   image:
  //     "https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  //   imageWide:
  //     "https://images.unsplash.com/photo-1571178109673-2686d60d6cba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
  // },
};
