import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.linkList}>

        <li>
          <NavLink exact to="/" className={styles.navLink} activeClassName={styles.current}>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" className={styles.navLink} activeClassName={styles.current}>
            Projects
          </NavLink>
        </li>
      
        <li>
          <a
            href="https://github.com/bpagador"
            className={styles.navLink}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </li>
      
        <li>
          <a
            href="https://www.linkedin.com/in/briseida-pagador/"
            className={styles.navLink}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </li>
        
        <li>
          <NavLink to="/contact" className={styles.navLink} activeClassName={styles.current}>
            Contact
          </NavLink>
        </li>

        <li>
          <NavLink to="/bonus" className={styles.navLink} activeClassName={styles.current}>
            Bonus
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
