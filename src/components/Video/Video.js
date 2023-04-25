import React, { useCallback, useEffect } from 'react';
import { useBeforeUnload } from 'react-router-dom';
import Hls from 'hls.js';

import { useKeyDown } from '../../../hooks/useKeyDown';
import {
  KEY_PLAYBACK_RATE,
  MAX_VIDEO_SPEED,
  MIN_VIDEO_SPEED,
  VIDEO_SPEED_STEP,
} from '../../../utils/constants';

import styles from './Video.scss';

const Video = ({
  isCardVideo,
  isMutedVideo,
  playVideo,
  showPreview,
  setCanPlay,
  video,
  videoLink,
  id,
}) => {
  const onEndedLoop = () => {
    if (isCardVideo && !showPreview) {
      playVideo();
    }
  };

  const getVideoKey = (id) => `video_${id}`;

  const saveVideoProgress = (video, id) => {
    if (id) localStorage.setItem(getVideoKey(id), video.currentTime);
  };

  useBeforeUnload(
    useCallback(() => {
      saveVideoProgress(video.current, id);
    }, [])
  );

  const changePlaybackRate = (pressedKey) => {
    switch (pressedKey) {
      case KEY_PLAYBACK_RATE.SPEED_DOWN:
        if (video.current.playbackRate > MIN_VIDEO_SPEED) {
          video.current.playbackRate -= VIDEO_SPEED_STEP;
        }
        break;

      case KEY_PLAYBACK_RATE.SPEED_UP:
        if (video.current.playbackRate < MAX_VIDEO_SPEED) {
          video.current.playbackRate += VIDEO_SPEED_STEP;
        }
        break;

      default:
        break;
    }
  };

  useKeyDown((pressedKey) => {
    changePlaybackRate(pressedKey);
  }, KEY_PLAYBACK_RATE);

  useEffect(() => {
    const videoRef = video.current;

    if (Hls.isSupported() && video.current) {
      const config = {
        startPosition: Number(localStorage.getItem(getVideoKey(id))),
      };

      const hls = new Hls(config);

      hls.loadSource(videoLink);
      hls.attachMedia(video.current);

      hls.on(Hls.Events.ERROR, () => {
        setCanPlay((prevState) => !prevState);
      });
    }

    return () => {
      saveVideoProgress(videoRef, id);
    };
  }, []);

  return (
    <video
      className={styles.video__video}
      preload="metadata"
      muted={isMutedVideo}
      ref={video}
      onEnded={onEndedLoop}
      controls={!isCardVideo}
    />
  );
};

export default Video;
