import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import lyndaSm from "../../../Assets/img/Portfolio items/lynda.gif";
import lyndaLg from "../../../Assets/img/Portfolio items/lynda.gif";
import ticSm from "../../../Assets/img/Portfolio items/demo.gif";
import ticLg from "../../../Assets/img/Portfolio items/demo.gif";
import weather from "../../../Assets/img/Portfolio items/weather.gif";
import sinkstoreSm from "../../../Assets/img/Portfolio items/sinkstore.gif";
import sinkstoreLg from "../../../Assets/img/Portfolio items/sinkstore.gif";

import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";

import html from "../../../Assets/img/logos/html.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
import react from "../../../Assets/img/logos/react.svg";
import nodejs from "../../../Assets/img/logos/nodejs.svg";
import expressjs from "../../../Assets/img/logos/expressjs.svg";
import mongodb from "../../../Assets/img/logos/mongodb.svg";
import chakra from "../../../Assets/img/logos/chakra.png";

const ProjectContainer = () => {
  const { isLight } = useContext(ThemeContext);
  const projects = [
    {
      image: [sinkstoreSm, sinkstoreLg],
      alt: "SkinStore.com_web_clone",
      heading: "SkinStore.com_web_clone",
      p1: "This is a clone of SkinStore.com, where we have used HTML, CSS, and Javascript to achieve this.",
      l1: "https://github.com/murali0101/Skin-Store-Construct-Week-Project.git",
      a1: "Github page for a project.",
      l2: "https://skinstore.netlify.app/",
      a2: "SkinStore.com_web_clone",
      tech: [html, css, js],
    },
    {
      image: [lyndaSm, lyndaLg],
      alt: "lynda.com",
      heading: "lynda.com web clone",
      p1: "This is a clone of lynda.com, where we have used HTML, CSS, Javascript, Express, Node.JS, MongoDB ,React and Redux to achieve this.",
      l1: "https://github.com/murali0101/Lynda.com_Clone-frontend-.git",
      a1: "Github page for a lynda project.",
      l2: "https://lynda01.netlify.app/",
      a2: "lynda live website.",
      tech: [html, css, js, expressjs, nodejs],
    },
    {
      image: [ticSm, ticLg],
      alt: "Tic Tac Toe",
      heading: "Tic Tac Toe",
      p1: "Tic-tac-toe is a game in which two players take turns in drawing either an '0' or an 'X' in one square of a grid consisting of nine squares.",
      l1: "https://github.com/murali0101/tic-tac-toe-react.git",
      a1: "Github page for a project.",
      l2: "https://tic-tac-toe-02.netlify.app/",
      a2: "Tic Tac Toe live website.",
      tech: [html, css, js, react],
    },
    {
      image: [weather, weather],
      alt: "Weather App",
      heading: "Weather App",
      p1: "A Weather search app, where users can search various city weather and get the full  weather details of it.",
      l1: "https://github.com/murali0101/Weather-Website.git",
      a1: "Github page for a project.",
      l2: "https://weather-01.netlify.app/",
      a2: "Weather App live website",
      tech: [html, css, js],
    },
    {
      image: [weather, weather],
      alt: "E-Store App",
      heading: "E-Store App",
      p1: "This project is about building an online E-commerce web application with backend integration showing the functionalities of an e-commerce website like filtering the products , darkmode ,add to cart , wishlist etc...",
      l1: "https://github.com/murali0101/E-Store-Front-End-",
      a1: "Github page for a project.",
      l2: "https://e-store-01.netlify.app/",
      a2: "Weather App live website",
      tech: [html, css, chakra, js, react, nodejs, expressjs, mongodb],
    },
  ];
  return (
    <div className={`${styles.projectContainer} ${!isLight && styles.dark}`}>
      {projects.map((data, index) => {
        return <ProjectItem data={data} index={index} key={index} />;
      })}
    </div>
  );
};

export default ProjectContainer;
