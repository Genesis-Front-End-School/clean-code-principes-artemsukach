import React from 'react';

import VolumeLogo from './img/volume.svg';

import styles from './VolumeButton.scss';

const VolumeButton = ({
  isMutedVideo,
  setIsMutedVideo,
  isCardVideo,
  showPreview,
}) => {
  const toggleVolumeVideo = (event) => {
    event.stopPropagation();
    setIsMutedVideo((prevState) => !prevState);
  };

  return (
    isCardVideo &&
    !showPreview && (
      <div
        className={`${styles.video__volume} ${
          isMutedVideo ? styles.video__volume_muted : ''
        }`}
        onClick={toggleVolumeVideo}
        role="presentation"
      >
        <VolumeLogo className={styles.video__volumeIcon} />
      </div>
    )
  );
};

export default VolumeButton;
