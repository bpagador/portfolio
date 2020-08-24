import React from 'react';
import styles from './Header.css';
import Resume from '../resume/Resume';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div>
        <h2>fullstack software developer</h2>
        <h1 className={styles.pahloMyPahlo}>
                    Briseida
          <br />
                    Pagador
        </h1>
      </div>
      <Resume />
      <img className={styles.logo} src="/assets/images/hummingbird-logo.png" alt="" />
    </header>
  );
}
