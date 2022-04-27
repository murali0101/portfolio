import React, { useContext } from "react";
import { ThemeContext } from "../../../context/ThemeContext";
import whakaariSm from "../../../Assets/img/Portfolio items/lynda.png";
import whakaariLg from "../../../Assets/img/Portfolio items/lynda.png";
import pounamunuiSm from "../../../Assets/img/Portfolio items/youtube.png";
import pounamunuiLg from "../../../Assets/img/Portfolio items/youtube.png";
import newsAggregator from "../../../Assets/img/Portfolio items/foodApp.png";
import spacexSm from "../../../Assets/img/Portfolio items/sinkstore.png";
import spacexLg from "../../../Assets/img/Portfolio items/sinkstore.png";

import ProjectItem from "./ProjectItem";

import styles from "./ProjectContainer.module.css";

import html from "../../../Assets/img/logos/html.svg";
import css from "../../../Assets/img/logos/css.svg";
import js from "../../../Assets/img/logos/js.svg";
import react from "../../../Assets/img/logos/react.svg";
import nodejs from "../../../Assets/img/logos/nodejs.svg";
import expressjs from "../../../Assets/img/logos/expressjs.svg";

const ProjectContainer = () => {
  const { isLight } = useContext(ThemeContext);
  const projects = [
    {
      image: [spacexSm, spacexLg],
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
      image: [whakaariSm, whakaariLg],
      alt: "lynda.com",
      heading: "lynda.com web clone",
      p1: "This is a clone of lynda.com, where we have used HTML, CSS, Javascript, Express, Node.JS, MongoDB ,React and Redux to achieve this.",
      l1: "https://github.com/utukaule/linkedin-learning.git",
      a1: "Github page for a lynda project.",
      l2: "https://linkedinlearning.netlify.app/",
      a2: "lynda live website.",
      tech: [html, css, js, react, expressjs, nodejs],
    },
    // {
    //   image: [pounamunuiSm, pounamunuiLg],
    //   alt: "Youtube web clone",
    //   heading: "Youtube web clone",
    //   p1: "Getting familiar with google APIs by creating this simple Youtube-like app, where users can search and stream Youtube videos. Using JS, HTML and CSS.",
    //   l1: "https://github.com/AmbaliyaDhruv/YouTube_clone.github.io",
    //   a1: "Github page for a project.",
    //   l2: "https://ambaliyadhruv.github.io/YouTube_clone.github.io/",
    //   a2: "Youtube clone web project live website.",
    //   tech: [html, css, js],
    // },
    // {
    //   image: [newsAggregator, newsAggregator],
    //   alt: "Food App",
    //   heading: "Food App",
    //   p1: "A food search app, where users can search various dishes and get the full recipe of it and Implemented search functionality using JS debouncing to minimize the unnecessary api calls",
    //   l1: "https://github.com/AmbaliyaDhruv/FoodApp",
    //   a1: "Github page for a project.",
    //   l2: "https://food-app-ambaliyadhruv.vercel.app/index.html",
    //   a2: "Food App live website",
    //   tech: [html, css, js],
    // },
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
