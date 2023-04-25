import { useCallback, useEffect } from 'react';

export const useKeyDown = (callback, keys) => {
  const onKeyDown = useCallback((event) => {
    const wasAnyKeyPressed = Object.values(keys).includes(event.key);

    if (wasAnyKeyPressed) {
      event.preventDefault();
      callback(event.key);
    }
  }, [callback, keys]);

  useEffect(() => {
    document.addEventListener('keydown', onKeyDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
    };
  }, [onKeyDown]);
};
