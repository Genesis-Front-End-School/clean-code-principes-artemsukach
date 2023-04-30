import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import Layout from 'src/components/Layout/Layout';
import CoursesPage from 'src/pages/CoursesPage/CoursesPage';
import ErrorPage from 'src/pages/ErrorPage/ErrorPage';
import CoursePage from 'src/pages/CoursePage/CoursePage';

import { ROUTE_PATH } from 'utils/constants';
import { apiCourses } from 'api/services/courses';
import { getPathWithoutPage } from 'helpers/getPathWithoutPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: ROUTE_PATH.course(),
        element: <CoursePage />,
        loader: apiCourses.getCourseRouted,
      },
      {
        path: ROUTE_PATH.courses(),
        element: <CoursesPage />,
        loader: apiCourses.getCourses,
        shouldRevalidate: ({ currentUrl, nextUrl }) => {
          if (!currentUrl.pathname.includes('page')) return false; // if path don't exist page param

          const currentPath = getPathWithoutPage(currentUrl.pathname);
          const nextPath = getPathWithoutPage(nextUrl.pathname);

          return currentPath !== nextPath;
        },
      },
    ],
  },
]);

export default router;
