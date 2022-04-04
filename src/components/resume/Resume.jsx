import React from 'react';
import styles from './Resume.css';
import resume from '../../../assets/2022_Resume_BP.docx.pdf';


export default function Resume() {
  return (
    <div className={styles.Resume}>
      <a href={resume} target="_blank" rel="noreferrer">
        Resume
      </a>
    </div>
  );
}
