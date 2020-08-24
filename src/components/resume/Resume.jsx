import React from 'react';
import styles from './Resume.css';
import resume from '../../../assets/BriseidaPagadorResume.pdf';


export default function Resume() {
  return (
    <div className={styles.Resume}>
      <iframe src={resume} title="Briseida Pagador Resume"></iframe>
        Resume
    </div>
  );
}
