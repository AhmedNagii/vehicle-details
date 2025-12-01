import React from 'react';
import styles from './Crumb.module.css';

const Crumb = ({ href, children, ...delegated }) => {
  return (
    <div className={styles.crumbWrapper}>
      <a href={href} className={styles.crumbLink} {...delegated}>
        {children}
      </a>
    </div>
  );
};

export default Crumb;
