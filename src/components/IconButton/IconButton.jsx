import React from 'react';
import styles from './IconButton.module.css';

function IconButton({ children, onClick, text, customStyles }) {
  return (
    <button
      style={{ ...customStyles }}
      className={styles.iconButton}
      onClick={onClick}
    >
      {children}
      {text && <span>{text}</span>}
    </button>
  );
}

export default IconButton;
