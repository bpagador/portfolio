import React from 'react';
import { Link } from 'react-router-dom';
import styles from './NavBar.css';

export default function NavBar() {
  return (
    <nav>
      <ul className={styles.linkList}>

        <li>
          <Link to="/projects" className={styles.navLink} activeClassName={styles.current}>
            Projects
          </Link>
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
          <Link to="/contact" className={styles.navLink} activeClassName={styles.current}>
            Contact
          </Link>
        </li>

        <li>
          <Link to="/bonus" className={styles.navLink} activeClassName={styles.current}>
            Bonus
          </Link>
        </li>
      </ul>
    </nav>
  );
}
