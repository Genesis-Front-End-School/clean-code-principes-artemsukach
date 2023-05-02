import React from 'react';
import { Link, useNavigation } from 'react-router-dom';

import Spinner from 'src/components/Spinner/Spinner';

import styles from './ErrorPage.scss';

const NotFoundPage = () => {
  const { state } = useNavigation();

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorPage__titleWrapper}>
        <h1 className={styles.errorPage__title}>Error 404</h1>
      </div>
      <Link className={styles.errorPage__goBackButton} to="/courses">
        Go Home
      </Link>
      {state === 'loading' && <Spinner />}
    </div>
  );
};

export default NotFoundPage;
