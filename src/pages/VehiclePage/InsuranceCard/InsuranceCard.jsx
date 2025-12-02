import React from 'react';
import styles from './InsuranceCard.module.css';
import cardIcon from '../../../assets/images/InsuranceCardLogo.svg';

function InsuranceCard() {
  return (
    <div className={styles.insuranceCardWrapper}>
      {/* Row for the title and the icon */}
      <div className={styles.cardHeader}>
        {/* Main title of the card */}
        <span className={styles.cardTitle}>
          <span className={styles.companyName} >Al Rajhi Takaful</span>
          <br />
          Insurance Card
        </span>

        {/* Placeholder for the Insurance Icon (blue logo) */}
        <div className={styles.cardIconContainer}>
          <img src={cardIcon} />
        </div>
      </div>

      {/* The main content area with the two data points */}
      <div className={styles.cardDetailsGrid}>
        {/* Policy Number Field */}
        <div className={styles.dataField}>
          <span className={styles.dataLabel}>Policy number</span>
          <span className={styles.dataValue}>9876543456788767</span>
        </div>

        {/* Expiration Date Field */}
        <div className={styles.dataField}>
          <span className={styles.dataLabel}>Expiration date</span>
          <span className={styles.dataValue}>26 Mar. 2027</span>
        </div>
      </div>
    </div>
  );
}

export default InsuranceCard;
