import React from 'react';
import styles from './index.less';

const ScrollPanelHorizontal = ({ children }) => {
  return (
    <div className={styles.container}>
      <div className={styles.scrollContent}>{children}</div>
    </div>
  );
};

export default ScrollPanelHorizontal;
