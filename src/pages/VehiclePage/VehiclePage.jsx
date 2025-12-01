import React from 'react';
import styles from './VehiclePage.module.css';
import BreadCrumbs from '../../components/Breadcrumbs/Breadcrumbs.jsx';
import Crumb from '../../components/Crumb/Crumb';
import StatusIcon from '../../components/StatusIcon/StatusIcon.jsx';
import CircleButton from '../../components/CircleButton/CircleButton.jsx';
import IconButton from '../../components/IconButton/IconButton.jsx';
import backIcon from '../../assets/icons/back-icon.svg';
import printerIcon from '../../assets/icons/printerIcon.svg';
import options from '../../assets/icons/options-horizontal.svg';
import { headerMetaData } from '../../data/dummyData.js';
import InfoPair from '../../components/InfoPair/InfoPair.jsx';
import PlateNumber from '../../components/PlateNumber/PlateNumber.jsx';
import DriverInfo from '../../components/DriverInfo/DriverInfo.jsx';

const VehiclePage = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageHeader}>
        <div className={styles.vehicleHeader}>
          <div className={styles.flexRow}>
            <CircleButton size={52}>
              <img src={backIcon} alt="Back" />
            </CircleButton>
            <div>
              <BreadCrumbs>
                <Crumb href="/">Vehicles</Crumb>
                <Crumb href="/vehicles">Vehicles details</Crumb>
                <Crumb href="/vehicles/12345">Chevrolet Tahoe 2025</Crumb>
              </BreadCrumbs>
              <div className={styles.flexRow}>
                <h1 className={styles.vehicleTitle}>Chevrolet Tahoe 2025</h1>
                <StatusIcon availability="Available" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.flexRow}>
          <IconButton
            customStyles={{ padding: '0 20px' }}
            text="Print"
            onClick={() => {}}
          >
            <img src={printerIcon} alt="printer icon" />
          </IconButton>
          <IconButton text="">
            <img src={options} alt="" />
          </IconButton>
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
    </div>
  );
};

export default VehiclePage;
