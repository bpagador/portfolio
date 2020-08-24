import React from 'react';
import Main from '../App/Main';
import styles from './Contact.css';

export default function Contact() {
  return (
    <Main>
      <h2>[ contact ]</h2>
      <ul className={styles.contactList}>
        <li className={styles.contactMethod}>
          <a href="mailto:bpagador@gmail.com" target="_blank" rel="noreferrer">
            <img src="/assets/icons/email.png" alt="" />
            <span>Email Me</span>
          </a>
        </li>

        <li className={styles.contactMethod}>
          <a href="https://calendly.com/bpagador" target="_blank" rel="noreferrer">
            <img src="/assets/icons/calendly.png" alt="" />
            <span>Schedule Time w/ Me</span>
          </a>
        </li>

        <li className={styles.contactMethod}>
          <a href="https://twitter.com/BriseidaPagador" target="_blank" rel="noreferrer">
            <img src="/assets/icons/twitter.png" alt="" />
            <span>Tweet @ Me</span>
          </a>
        </li>
      </ul>

      <img
        src="/assets/images/contact-pg-img.png"
        alt="Briseida working at her desk"
        width="510"
        height="340"
      />
    </Main>
  );
}
