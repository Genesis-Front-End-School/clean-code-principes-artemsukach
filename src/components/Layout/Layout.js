import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';

import Spinner from 'src/components/Spinner/Spinner'

import { useScrollToTop } from 'hooks/useScrollToTop';;

import styles from './Layout.scss';

const Layout = () => {
  const { state } = useNavigation();

  useScrollToTop();

  return (
    <main>
      {state === 'loading' && <Spinner />}
      <div className={styles.container}>
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
