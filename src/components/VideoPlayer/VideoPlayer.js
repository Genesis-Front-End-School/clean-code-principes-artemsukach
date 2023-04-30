import React, { useRef, useState } from 'react';

import VolumeButton from 'src/components/VolumeButton/VolumeButton';
import VideoPreview from 'src/components/VideoPreview/VideoPreview';
import HoverHint from 'src/components/HoverHint/HoverHint';
import Video from 'src/components/Video/Video';

import styles from './VideoPlayer.scss';

const VideoPlayer = ({
  id,
  isCardVideo = false,
  videoLink,
  previewImageLink,
}) => {
  const [showPreview, setShowPreview] = useState(true);
  const [isMutedVideo, setIsMutedVideo] = useState(isCardVideo);
  const [canPlay, setCanPlay] = useState(true);
  const video = useRef(null);

  const togglePreview = () => {
    if (canPlay) {
      setShowPreview((prevState) => !prevState);
    }
  };

  const stopVideo = () => {
    togglePreview();

    video.current.pause();
  };

  const playVideo = () => {
    video.current.play();
  };

  const getHoverListeners = () => {
    if (isCardVideo) {
      return {
        onMouseEnter: togglePreview,
        onMouseLeave: stopVideo,
      };
    }

    return {};
  };

  return (
    <div className={styles.video__media} {...getHoverListeners()}>
      <HoverHint
        isCardVideo={isCardVideo}
        showPreview={showPreview}
        canPlay={canPlay}
      />
      <Video
        isCardVideo={isCardVideo}
        isMutedVideo={isMutedVideo}
        playVideo={playVideo}
        showPreview={showPreview}
        setCanPlay={setCanPlay}
        video={video}
        videoLink={videoLink}
        id={id}
      />
      <VideoPreview
        isCardVideo={isCardVideo}
        showPreview={showPreview}
        playVideo={playVideo}
        previewImageLink={previewImageLink}
      />
      <VolumeButton
        isMutedVideo={isMutedVideo}
        setIsMutedVideo={setIsMutedVideo}
        isCardVideo={isCardVideo}
        showPreview={showPreview}
      />
    </div>
  );
};

export default VideoPlayer;
