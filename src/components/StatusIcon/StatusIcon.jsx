import React from 'react';
import styles from './StatusIcon.module.css';

const status = {
  Available: {
    className: styles.available,
    text: 'Available',
  },
  Unavailable: {
    className: styles.unavailable,
    text: 'Available',
  },
};

function StatusIcon({ availability = 'Available' }) {
  const currentStatus = status[availability];

  return (
    <div className={`${styles.baseIcon} ${currentStatus.className}`}>
      <span>{currentStatus.text}</span>
    </div>
  );
}

export default StatusIcon;
