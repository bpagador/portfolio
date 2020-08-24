import React from 'react';
import styles from './Resume.css';
import resume from '../../../assets/BriseidaPagadorResume.pdf';


export default function Resume() {
  return (
    <div className={styles.Resume}>
      <iframe src={resume} target="_blank" rel="noreferrer">
        Resume
      </iframe>
    </div>
  );
}
