import React from 'react';
import styles from './Header.css';
import Resume from '../resume/Resume';
import hummingbird from '../../../assets/images/hummingbird-logo.png';

export default function Header() {
  return (
    <header className={styles.Header}>
      <div>
        <h2>software engineer</h2>
        <h1 className={styles.pahloMyPahlo}>
          BRISEIDA <br/> <em>brih·say·dah</em> <br/> PAGADOR </h1>
      </div>
      <Resume />
      <img className={styles.logo} src={hummingbird} alt="" />
    </header>
  );
}
