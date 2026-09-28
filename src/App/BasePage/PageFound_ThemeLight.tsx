import { useContext, useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { Theme, ThemeContext } from '@/Theme';

import './PageFound_ThemeLight.css';
import Navigation from './PageFound/Navigation';
import ThemeSwitcher from './ThemeSwitcher';

const MOBILE_MAX_WIDTH = 1024;

function PageFound_ThemeLight() {
  const { theme } = useContext(ThemeContext);

  const [mobileMenuActive, setMobileMenuActive] = useState(false);
  const [isMobile, setIsMobile] = useState(
    window.innerWidth <= MOBILE_MAX_WIDTH,
  );

  const headerRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // Change the appearance of the header when scrollTop is greater than 0
  useEffect(() => {
    if (theme === Theme.DARK) return;
    function changeColorOfHeader(e: Event) {
      const target = e.target as Document;
      const scrollTop = target.scrollingElement?.scrollTop;
      if (scrollTop === 0) {
        headerRef.current!.classList.remove('not-at-the-top');
      } else {
        headerRef.current!.classList.add('not-at-the-top');
      }
    }
    document.addEventListener('scroll', changeColorOfHeader);
    return () => document.removeEventListener('scroll', changeColorOfHeader);
  }, [theme]);

  // Close the mobile menu if big screen size is reached
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= MOBILE_MAX_WIDTH);
      if (!isMobile) {
        setMobileMenuActive(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  const handleMobileMenuButtonClick = () => {
    setMobileMenuActive((prevValue) => !prevValue);
  };

  return (
    <div id='content' className={theme}>
      <header ref={headerRef}>
        <button
          className='mobile-menu-button'
          onClick={handleMobileMenuButtonClick}
        >
          <i className='fa-solid fa-bars' />
        </button>
        <h1 id='site-title'>
          <Link to='/'>theodepinho.net</Link>
        </h1>
        {!isMobile && <Navigation className='header-nav' />}
        <div className='header-right-cell'>
          <ThemeSwitcher />
        </div>
      </header>
      <aside
        ref={mobileMenuRef}
        className={`mobile-menu ${mobileMenuActive ? 'active' : 'inactive'}`}
      >
        <button
          className='mobile-menu-button'
          onClick={handleMobileMenuButtonClick}
        >
          <i className='fa-solid fa-xmark' />
        </button>
        <div className='nav-container'>
          <Navigation
            className={`mobile-menu-nav ${mobileMenuActive ? 'active' : 'inactive'}`}
            onLinkClick={() => setMobileMenuActive(false)}
          />
        </div>
      </aside>
      <main ref={mainRef}>
        <Outlet />
      </main>
    </div>
  );
}

export default PageFound_ThemeLight;
