import React from 'react';
import styles from './InfoPair.module.css';

const InfoPair = ({ children, label }) => {
  return (
    <div className={styles.container}>
      <span className={styles.label}>{label}</span>
      {children}
    </div>
  );
};

export default InfoPair;
