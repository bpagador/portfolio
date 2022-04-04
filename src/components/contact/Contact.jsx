import React from 'react';
import Main from '../App/Main';
import styles from './Contact.css';
import email from '../../../assets/icons/email.png';
import twitter from '../../../assets/icons/twitter.png';
import briseida from '../../../assets/images/contact-pg-img.png';

export default function Contact() {
  return (
    <Main>
      <h2>Contact</h2>
      <ul className={styles.contactList}>
        <li className={styles.contactMethod}>
          <a href="mailto:bpagador@gmail.com" target="_blank" rel="noreferrer">
            <img src={email} alt="" />
            <span>Email Me</span>
          </a>
        </li>

        <li className={styles.contactMethod}>
          <a href="https://twitter.com/BriseidaPagador" target="_blank" rel="noreferrer">
            <img src={twitter} alt="" />
            <span>Tweet @ Me</span>
          </a>
        </li>
      </ul>

      <img
        src={briseida}
        alt="Briseida working at her desk"
        width="510"
        height="340"
      />
    </Main>
  );
}
