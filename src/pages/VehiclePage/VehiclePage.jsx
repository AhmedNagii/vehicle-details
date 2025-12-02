import React from 'react';
import styles from './VehiclePage.module.css';
import MainHeader from './MainHeader/MainHeader.jsx';
import SecondaryNavigation from './SecondaryNavigation/SecondaryNavigation.jsx';
import DataChartsSection from './DataChartsSection/DataChartsSection.jsx';
import VehicleDetailsSection from './VehicleDetailsSection/VehicleDetailsSection.jsx';

const VehiclePage = () => {
  return (
    <div className={styles.pageContainer}>
      <MainHeader />
      <SecondaryNavigation />

      <div className={styles.contentWrapper}>
        <VehicleDetailsSection />
        <DataChartsSection />
      </div>
    </div>
  );
};

export default VehiclePage;
