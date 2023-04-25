import React from 'react';

import styles from './HoverHint.scss';

const HoverHint = ({ isCardVideo, showPreview, canPlay }) =>
  isCardVideo &&
  canPlay && (
    <p
      className={`${styles.video__hoverHint} ${
        !showPreview ? styles.video__hoverHint_hidden : ''
      }`}
    >
      Hover to play
    </p>
  );

export default HoverHint;
