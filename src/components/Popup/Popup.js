import React, { useEffect, useState } from 'react';

import styles from './Popup.scss';

const Popup = ({ onClose, show, children }) => {
  const [isShow, setIsShow] = useState(false);

  const closeHandler = () => {
    setIsShow(false);
    onClose(false);
  };

  const overlayClassName = `${styles.overlay} ${
    !isShow ? styles.overlay_hidden : ''
  }`;

  useEffect(() => {
    setIsShow(show);
  }, [show]);

  return (
    <div
      className={overlayClassName}
    >
      <div className={styles.popup}>
        <div
          className={styles.close}
          onClick={closeHandler}
          role="presentation"
        >
          &times;
        </div>
        <div className={styles.content}>{children}</div>
      </div>
    </div>
  );
};

export default Popup;
