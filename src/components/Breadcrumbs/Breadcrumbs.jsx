import React from 'react'
import styles from './Breadcrumbs.module.css'

function Breadcrumbs({ children }) {

  return <nav className={styles.wrapper}>{children}</nav>;
  
}

export default Breadcrumbs