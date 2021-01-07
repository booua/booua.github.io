import React from "react";
import AEPlay from "./ProjectPages/AEPlay";
import CernEamLight from "./ProjectPages/CernEamLight";
import ElectronCMS from "./ProjectPages/ElectronCMS";
import Neuroevolution from "./ProjectPages/Neuroevolution";
import Smogbar from "./ProjectPages/Smogbar";

export const ProjectsList = {
  smogbar: {
    id: "smogbar",
    title: "SMOGbar",
    image: "/img/smogbar/smogbar.png",
    imageWide: "/img/smogbar/smogbarMock.png",
    logo: "/img/smogbar/logo.png",
    imageAlt:
      "https://raw.githubusercontent.com/booua/smogbar/master/src/images/screenshotdark.png",
    content: () => <Smogbar/>
  },
  electronCMS: {
    id: "electronCMS",
    title: "Electron CMS",
    image: "/img/electroncms/electroncms1.png",
    imageWide: "/img/electroncms/electronCMSMock.png",
    imageAlt: "/img/electroncms/electronCMSMock.png",
    content: () => <ElectronCMS/>
  },

  cern_eamlight: {
    id: "cern_eamlight",
    title: "CERN EAMLight",
    image: "/img/eamlight/eamlight.png",
    imageWide: "/img/eamlight/eamlightMock.png",
    imageAlt: "/img/eamlight/eamlightalt.png",
    content: () => <CernEamLight/>,
  },
  neuroevolution: {
    id: "neuroevolution",
    title: "Neuroevolution Chrome Dino",
    image: "/img/neuroevolution/neuroevolution.png",
    imageWide: "/img/neuroevolution/neuroevolution.png",
    imageAlt: "/img/neuroevolution/neuroevolution.png",
    content: () => <Neuroevolution/>
  },
  aeplay: {
    id: "aeplay",
    title: "AE Play",
    image: "/img/aeplay/aeplay.png",
    imageWide: "/img/aeplay/aeplay.png",
    imageAlt: "/img/aeplay/aeplay.png",
    content: () =>  <AEPlay/>,
  },
  framerMotion: {
    id: "framerMotion",
    title: "Product microinteractions",
    image:
      "https://i.ibb.co/sF5tGN1/showcase.gif",
    imageWide:
      "https://i.ibb.co/sF5tGN1/showcase.gif",
      content: () => {},
  },
};
