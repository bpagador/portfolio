import React from 'react';
import styles from './Resume.css';


export default function Resume() {
  return (
    <div className={styles.Resume}>
      <a href={'/assets/BriseidaPagadorResume.pdf'} target="_blank" rel="noreferrer">
        Resume
      </a>
    </div>
  );
}
