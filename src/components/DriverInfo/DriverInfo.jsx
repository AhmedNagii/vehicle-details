import React from 'react';
import styles from './DriverInfo.module.css';
import person from '../../assets/images/person.svg';

function DriverInfo({ info }) {
  const { name, phoneNumber } = info;
  return (
    <div className={styles.container}>
      <img src={person} alt="Driver Avatar" />
      <div className={styles.info}>
        <span className={styles.driverName}>{name}</span>
        <span className={styles.phon} >{phoneNumber}</span>
      </div>
    </div>
  );
}

export default DriverInfo;
