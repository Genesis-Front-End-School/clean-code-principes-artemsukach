import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
;
import Lesson from 'src/components/Lesson/Lesson';
import Popup from 'src/components/Popup/Popup';
import Rating from 'src/components/Rating/Rating';
import Skills from 'src/components/Skills/Skills';
import VideoPlayer from 'src/components/VideoPlayer/VideoPlayer';

import pluralize from 'helpers/pluralize'

import styles from './CoursePage.scss';

const CoursePage = () => {
  const {
    data: {
      title = '',
      description = '',
      rating = '-',
      lessons = '-',
      previewImageLink,
      meta: { skills, courseVideoPreview: { link = '' } = {} } = {},
    },
  } = useLoaderData();

  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className={styles.course__header}>
        <div className={styles.course__headerWrapper}>
          <div className={styles.course__info}>
            <h1 className={styles.course__title}>{title}</h1>
            <p className={styles.course__description}>{description}</p>
            <div className={styles.course__countInfo}>
              <div className={styles.course__lessonCount}>
                {pluralize(lessons.length, 'lesson')}
              </div>
              <Rating rating={rating} theme="dark" />
            </div>
            <Skills skills={skills} />
          </div>
          <div
            className={styles.course__video}
            onClick={() => {
              setShowPopup(true);
            }}
            role="presentation"
          >
            <div className={styles.course__playButton} />
            <img
              className={styles.course__videoPreview}
              src={`${previewImageLink}/cover.webp`}
              alt="Course preview"
            />
          </div>
        </div>
      </div>
      <div className={styles.course__main}>
        <div className={styles.course__lessons}>
          <h2 className={styles.course__lessonsTitle}>Lessons</h2>
          {lessons.map((lesson) => (
            <Lesson key={lesson.id} lesson={lesson} />
          ))}
        </div>
      </div>
      <Popup show={showPopup} onClose={() => setShowPopup(false)}>
        <VideoPlayer videoLink={link} previewImageLink={previewImageLink} />
      </Popup>
    </>
  );
};

export default CoursePage;
