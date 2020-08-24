import React from 'react';
import styles from './App.css';

// eslint-disable-next-line react/prop-types
export default function Main({ children }) {
  return (
    <main className={styles.Main}>
      {children}
    </main>
  );
}
