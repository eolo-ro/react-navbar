import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <nav className={styles.nav}>
      <Link to="/" className={styles.siteTitle}>
        Title
      </Link>
      <ul>
        <Link to="/about" className="About">
          About
        </Link>
        <Link to="/projects" className="Projects">
          Projects
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
