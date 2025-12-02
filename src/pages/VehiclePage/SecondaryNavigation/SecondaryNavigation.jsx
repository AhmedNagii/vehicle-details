import React from 'react';
import styles from './SecondaryNavigation.module.css';
import { vehicleDetailTabs } from '../../../data/dummyData';

function SecondaryNavigation() {
  const [activeTabId, setActiveTabId] = React.useState('overview');

  const handleTabClick = (tabId) => {
    setActiveTabId(tabId);
  };
  return (
    <nav className={styles.nav}>
      <ul className={styles.navList}>
        {vehicleDetailTabs.map((tab) => {
          return (
            <li
              key={tab.id}
              className={
                activeTabId == tab.id ? styles.active : styles.inActive
              }
            >
              <a
                className={`${styles.navLink} ${
                  tab.id === activeTabId ? styles.active : ''
                }`}
                onClick={() => handleTabClick(tab.id)}
              >
                {tab.label}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default SecondaryNavigation;
