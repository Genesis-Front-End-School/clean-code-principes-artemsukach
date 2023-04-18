import React from 'react';

import { usePagination, DOTS } from '../../../hooks/usePagination';

import styles from './Pagination.scss';

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
}) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const lastPage = paginationRange[paginationRange.length - 1];

  const prevButtonClassName = `${styles.pagination__item} ${
    currentPage === 1 ? 'disabled' : ''
  }`;

  const getPageNumberClassName = (page) => `${styles.pagination__item} ${
    currentPage === page ? 'selected' : ''
  }`;

  const nextButtonClassName = `${styles.pagination__item} ${
    currentPage === lastPage ? 'disabled' : ''
  }`;

  return (
    <ul className={styles.pagination}>
      <li
        className={prevButtonClassName}
        onClick={onPrevious}
        role="presentation"
      >
        <div className={`${styles.arrow} ${styles.left}`} />
      </li>
      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li
              className={`${styles.pagination__item} ${styles.dots}`}
              key={pageNumber}
            >
              {DOTS}
            </li>
          );
        }

        return (
          <li
            className={getPageNumberClassName(pageNumber)}
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            role="presentation"
          >
            {pageNumber}
          </li>
        );
      })}
      <li className={nextButtonClassName} onClick={onNext} role="presentation">
        <div className={`${styles.arrow} ${styles.right}`} />
      </li>
    </ul>
  );
};

export default Pagination;
