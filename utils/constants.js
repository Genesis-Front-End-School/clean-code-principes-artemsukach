export const ROUTE_PATH = {
  courses: () => '/courses/page?/:page?',
  course: (id) => (id ? `/courses/${id}` : '/courses/:id'),
};

export const PAGE_SIZE = 10;

export const KEY_PLAYBACK_RATE = {
  SPEED_UP: 'i',
  SPEED_DOWN: 'u',
};

export const VIDEO_SPEED_STEP = 0.25;
export const MIN_VIDEO_SPEED = 0.25;
export const MAX_VIDEO_SPEED = 4;
