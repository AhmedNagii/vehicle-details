import React from 'react';
import styles from './DataChartsSection.module.css';
import StatCard from '../../../components/StatCard/StatCard.jsx';
import { Down } from '../../../assets';
import { summaryCardData } from '../../../data/dummyData.js';
import { SaudiRiyal } from '../../../assets';
function DataChartsSection() {
  return (
    <section className={styles.sectionContainer}>
      <div className={styles.cardsWrapper}>
        {summaryCardData.map((card) => {
          return <StatCard key={card.id} cardInfo={card} />;
        })}
      </div>
      <div className={styles.chartHeader}>
        <h3 className={styles.title}>Income and Expense </h3>
        <button className={styles.dropDown}>
          <span className={styles.dropDownText}>This Fiscal Year</span>
          <div className={styles.dropDownIcon}>
            <img src={Down} />
          </div>
        </button>
      </div>

      <div className={styles.infoHeader}>
        <div className={styles.info}>
          <span className={styles.label}>Avg. Monthly Revenue</span>
          <span className={styles.value}>
            <img
              className={styles.iconWrapper}
              src={SaudiRiyal}
              alt="Saudi Riyal currency Symbol"
            />{' '}
            {'91,275.00'}
          </span>
        </div>
        <div className={styles.info}>
          <span className={styles.label}>Avg. Monthly Expenses</span>
          <span className={styles.value}>
            <img
              className={styles.iconWrapper}
              src={SaudiRiyal}
              alt="Saudi Riyal currency Symbol"
            />{' '}
            {'9,275.00'}
          </span>
        </div>
      </div>

      <div className={styles.chartHeader}>
        <h3 className={styles.title}>Monthly Utilizing </h3>
        <button className={styles.dropDown}>
          <span className={styles.dropDownText}>This Fiscal Year</span>
          <div className={styles.dropDownIcon}>
            <img src={Down} />
          </div>
        </button>
      </div>

      <div className={styles.infoHeader}>
        <div className={styles.info}>
          <span className={styles.label}>Avg. Monthly Utilizing</span>
          <span className={styles.value}>
         
            80&
          </span>
        </div>
      </div>
    </section>
  );
}

export default DataChartsSection;
