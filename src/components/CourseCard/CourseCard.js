import React from 'react';

import { useNavigate } from 'react-router-dom';

import Skills from 'src/components/Skills/Skills';
import Rating from 'src/components/Rating/Rating';
import VideoPlayer from 'src/components/VideoPlayer/VideoPlayer';

import { ROUTE_PATH } from 'utils/constants';
import pluralize from 'helpers/pluralize';

import styles from './CourseCard.scss';

const CourseCard = ({ course }) => {
  const {
    id,
    lessonsCount = '-',
    rating = '-',
    title = '',
    description = '',
    previewImageLink,
    meta: { skills = [], courseVideoPreview: { link = '' } = {} } = {},
  } = course;

  const navigate = useNavigate();

  return (
    <div
      className={styles.courseCard}
      onClick={() => navigate(ROUTE_PATH.course(id))}
      role="presentation"
    >
      <div className={styles.courseCard__cover}>
        <VideoPlayer
          isCardVideo
          videoLink={link}
          previewImageLink={previewImageLink}
        />
        <div className={styles.courseCard__details}>
          <div className={styles.courseCard__topInfo}>
            <div className={styles.courseCard__lessonCount}>
              {pluralize(lessonsCount, 'lesson')}
            </div>
            <Rating rating={rating} />
          </div>
          <h2 className={styles.courseCard__title}>{title}</h2>
          <p className={styles.courseCard__description}>{description}</p>
          <Skills skills={skills} viewCount={5} />
        </div>
      </div>
    </div>
  );
};
export default CourseCard;
