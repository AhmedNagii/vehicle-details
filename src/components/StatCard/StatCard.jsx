import React from 'react';
import styles from './StatCard.module.css';

function StatCard({ cardInfo }) {
  const { label, value, iconPath, currencySymbol } = cardInfo;
  return (
    <div className={styles.cardWrapper}>
      <div>
        <img src={iconPath} />
      </div>
      <div className={styles.flexRow}>
        <span className={styles.label}>{label}</span>
        <div className={styles.valueContainer}>
          <img src={currencySymbol} />
          <span className={styles.value}>{value}</span>
        </div>
      </div>
    </div>
  );
}

export default StatCard;
