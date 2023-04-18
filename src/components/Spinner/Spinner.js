import React from 'react';

import styles from './Spinner.scss';

const Spinner = () => (
  <div
    className={styles.overlay}
  >
    <div className={styles.spinner} />
  </div>
);

export default Spinner;
