import React from 'react';
import styles from './CircleButton.module.css';

function CircleButton({ children, size }) {
  return (
    <button
      style={{
        height: `${size}px`,
        width: `${size}px`,
      }}
      className={styles.CircleButton}
    >
      {children}
    </button>
  );
}

export default CircleButton;
