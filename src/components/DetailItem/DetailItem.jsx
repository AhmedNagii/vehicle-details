import React from 'react';
import styles from './DetailItem.module.css';
import { FileIcon } from '../../assets';
function DetailItem({ label, value, hasFile = false }) {
  return (
    <div className={styles.item}>
      <span> {label}</span>
      {hasFile ? <File value={value} /> : <span> {value}</span>}
    </div>
  );
}

const File = ({ value }) => (
  <div className={styles.fileInfo}>
    <div className={styles.flexCol}>
      <span className={styles.fileName}> {value}</span>
      <a className={styles.downloadUrl}> View</a>
    </div>
    <div className={styles.iconContainer}>
      <img src={FileIcon} />
    </div>
  </div>
);

export default DetailItem;
