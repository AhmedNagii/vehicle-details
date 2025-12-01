import React from 'react';
import styles from './PlateNumber.module.css';

function PlateNumber({ info }) {
  const { numberEN, numberAR, codeAR, codeEN } = info;
  return (
    <div className={styles.plateBadgeContainer}>
      <div className={styles.plateNumberSection}>
        <span className={styles.plateNumberText}> {numberAR} </span>
        <span className={styles.plateNumberText}>{numberEN}</span>
      </div>
      <div className={styles.plateNumberSection}>
        <span className={styles.plateNumberText}>{codeAR}</span>
        <span className={styles.plateNumberText}> {codeEN}</span>
      </div>
    </div>
  );
}

export default PlateNumber;
