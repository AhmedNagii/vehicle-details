import React from 'react';
import styles from './MainHeaderTablet.module.css';
import BreadCrumbs from '../../../components/Breadcrumbs/Breadcrumbs.jsx';
import Crumb from '../../../components/Crumb/Crumb';
import StatusIcon from '../../../components/StatusIcon/StatusIcon.jsx';
import CircleButton from '../../../components/CircleButton/CircleButton.jsx';
import IconButton from '../../../components/IconButton/IconButton.jsx';
import { BackIcon, PrinterIcon, Options } from '../../../assets';
import { headerMetaData } from '../../../data/dummyData.js';
import InfoPair from '../../../components/InfoPair/InfoPair.jsx';
import PlateNumber from '../../../components/PlateNumber/PlateNumber.jsx';
import DriverInfo from '../../../components/DriverInfo/DriverInfo.jsx';

function MainHeaderTablet() {
  return (
    <header className={styles.container}>
      <div className={styles.pageHeader}>
        <div className={styles.vehicleHeader}>
          <div className={styles.titleWrapper}>
            <CircleButton size={52}>
              <img src={BackIcon} alt="Back" />
            </CircleButton>
            <div>
              <BreadCrumbs>
                <Crumb href="/">Vehicles</Crumb>
                <Crumb href="/vehicles">Vehicles details</Crumb>
                <Crumb href="/vehicles/12345">Chevrolet Tahoe 2025</Crumb>
              </BreadCrumbs>
              <div className={styles.flexRow}>
                <h1 className={styles.vehicleTitle}>Chevrolet Tahoe 2025</h1>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.actionsContainer}>
          <div className={styles.flexRow}>
            <IconButton
              customStyles={{ padding: '0 20px' }}
              text="Print"
              onClick={() => {}}
            >
              <img src={PrinterIcon} alt="printer icon" />
            </IconButton>
            <IconButton text="">
              <img src={Options} alt="" />
            </IconButton>
          </div>
          <StatusIcon availability="Available" />
        </div>
      </div>
      <div className={styles.infoPairList}>
        {headerMetaData.map((val) => {
          return (
            <InfoPair key={val.title} label={val.title}>
              {val.component === 'PlateNumber' && (
                <PlateNumber info={val.info} />
              )}
              {val.component === 'DriverInfo' && <DriverInfo info={val.info} />}
              {!val.component && (
                <span className={styles.infoText}>{val.info || '-'}</span>
              )}
            </InfoPair>
          );
        })}
      </div>
    </header>
  );
}

export default MainHeaderTablet;
