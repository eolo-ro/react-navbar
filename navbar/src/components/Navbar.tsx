import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

type Props = {};

const Navbar = (props: Props) => {

  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.siteTitle}>
        Title
      </Link>

      <div className={styles.navLinks}>
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

      <a className={styles.toggleButton}>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
        <span className={styles.bar}></span>
      </a>
    </nav>
  );
};

export default Navbar;
