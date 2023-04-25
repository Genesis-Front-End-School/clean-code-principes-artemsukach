import React from 'react';

import styles from './VideoPreview.scss';

const VideoPreview = ({ isCardVideo, showPreview, playVideo, previewImageLink }) =>
  isCardVideo && (
    <img
      className={`${styles.video__videoPreview} ${
        !showPreview ? styles.video__videoPreview_hidden : ''
      }`}
      onAnimationEnd={playVideo}
      src={`${previewImageLink}/cover.webp`}
      alt="Course preview"
    />
  );

export default VideoPreview;
