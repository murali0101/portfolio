import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import { HashLink as Link } from "react-router-hash-link";
import styles from "./NavLinks.module.css";

const NavLinks = ({ input, navClass, handleSetMobileMenu, width, isLight }) => {
    smoothscroll.polyfill();
    return (
        <li
            className={`${styles[navClass]} ${!isLight && styles.dark}`}
            onClick={width <= 768 ? () => handleSetMobileMenu() : null}
        >{input==="Resume"? <a
                    href="https://drive.google.com/file/d/1K7tc4Sb5PhT0o8a6jp2YkYS67QFP44O0/view"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="My Linkedin resume"
                  >{input}
                </a>: 
                <Link smooth to={`/#${input.toLowerCase()}`}>
                {input}
            </Link>}
           </li>
    );
};

export default NavLinks;
