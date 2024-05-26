import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useLocomotiveScroll } from 'react-locomotive-scroll';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const { scroll } = useLocomotiveScroll();

  useEffect(() => {
    if (scroll) {
      scroll.scrollTo(0, {
        duration: 0,
        disableLerp: true,
      });
    }
  }, [pathname, scroll]);

  return null;
}
