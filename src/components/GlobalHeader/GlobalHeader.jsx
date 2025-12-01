import React from "react";
import styles from "./GlobalHeader.module.css";
import logo from '../../assets/images/serva.svg';

const GlobalHeader = () => {
  return (
    <header className={styles.container}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="Serva Logo" className={styles.logo} />
      </div>
    </header>
  );
};


export default GlobalHeader;