import React, { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

type Props = {};

const Navbar = (props: Props) => {
  // State variable to track whether to show the navigation links or not
  const [showNavLinks, setShowNavLinks] = useState(false);

  // Function to toggle the value of showNavLinks state variable
  const toggleNavLinks = () => {
    setShowNavLinks(!showNavLinks);
  };

  return (
    <nav className={styles.nav}>
      {/* Site title link */}
      <Link to="/" className={styles.siteTitle}>
        Title
      </Link>

      {/* Navigation links */}
      <div
        className={`${styles.navLinks} ${showNavLinks ? styles.active : ""}`}
      >
        <ul>
          <li>
            {" "}
            <Link to="/about" className="About">
              About
            </Link>
          </li>
          <li>
            {" "}
            <Link to="/projects" className="Projects">
              Projects
            </Link>
          </li>
        </ul>
      </div>

      {/* Toggle button */}
      <a className={styles.toggleButton} onClick={toggleNavLinks}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </a>
    </nav>
  );
};

export default Navbar;
