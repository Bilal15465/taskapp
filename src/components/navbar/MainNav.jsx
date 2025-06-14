import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import SecondNavbar from './SecondNavbar';

const MainNav = () => {
  const [isFirstNavVisible, setIsFirstNavVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setIsFirstNavVisible(currentScrollPos < 64);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* Container to preserve height and avoid layout shift */}
      <div style={{ height: '64px', position: 'relative', zIndex: 1300 }}>
        <div
          style={{
            transform: isFirstNavVisible ? 'translateY(0)' : 'translateY(-100%)',
            transition: 'transform 0.3s ease-in-out',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
          }}
        >
          <Navbar />
        </div>
      </div>

      <SecondNavbar isFirstNavVisible={isFirstNavVisible} />
    </div>
  );
};

export default MainNav;
