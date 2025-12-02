import React from 'react';
import styles from './VehicleDetailsSection.module.css';
import Vehicle from '../../../assets/images/Vehicle.svg';
import { vehicleDetailsData } from '../../../data/dummyData';
import DetailItem from '../../../components/DetailItem/DetailItem';
import InsuranceCard from '../InsuranceCard/InsuranceCard.jsx';

function VehicleDetailsSection() {
  return (
    <section className={styles.container}>
      <div className={styles.vehicleWrapper}>
        <img src={Vehicle} />
      </div>
      <h3 className={styles.title}>Vehicle Details</h3>
      <div>
        {vehicleDetailsData.map(({ label, value }) => {
          return <DetailItem key={label} label={label} value={value} />;
        })}
      </div>

      <InsuranceCard />

      <h3 className={styles.title}>Registration / Istimarah</h3>

      <div>
        <DetailItem value={'9876543209876543'} label={'Registration Number'} />
        <DetailItem value={'26 Mar. 2026'} label={'Expiry Date'} />
        <DetailItem hasFile={true} value={'23545dg.jpg'} label={'File'} />
      </div>
      <h3 className={styles.title}>Ownership Card</h3>

      <div>
        <DetailItem
          value={'Company Owned'}
          label={'Registration Number'}
        />
        <DetailItem value={'26 Mar. 2023'} label={'Purchase Date'} />
        <DetailItem hasFile={true} value={'235646dg.jpg'} label={'File'} />
      </div>
    </section>
  );
}

export default VehicleDetailsSection;
