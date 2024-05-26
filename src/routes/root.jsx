import { Outlet, useLocation } from 'react-router-dom';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';
import '../styles/style.css';
import { LocomotiveScrollProvider } from 'react-locomotive-scroll';
import { useRef, useEffect } from 'react';

export default function Root() {
  const ref = useRef(null);
  const location = useLocation();

  const options = {
    smooth: true,
    multiplier: 1.2,
  };

  useEffect(() => {
    if (ref.current && ref.current.locomotive) {
      setTimeout(() => {
        ref.current.locomotive.update();
      }, 100);
    }
  }, [location]);

  return (
    <LocomotiveScrollProvider
      options={options}
      containerRef={ref}
      watch={[location.pathname]}>
      <ScrollToTop />
      <Header />
      <main data-scroll-container ref={ref}>
        <Outlet />
      </main>
    </LocomotiveScrollProvider>
  );
}
