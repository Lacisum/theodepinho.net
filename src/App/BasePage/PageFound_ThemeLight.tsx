import { useContext, useEffect, useRef, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ThemeContext } from '@/Theme';

import './PageFound_ThemeLight.css';
import Navigation from './PageFound/Navigation';
import ThemeSwitcher from './ThemeSwitcher';

const MOBILE_MAX_WIDTH = 1024;

function PageFound_ThemeLight() {
  const { theme } = useContext(ThemeContext);

  const [sidebarActive, setSidebarActive] = useState(false);

  const headerRef = useRef<HTMLElement>(null);
  const mainRef = useRef<HTMLElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const sidebarButtonRef = useRef<HTMLButtonElement>(null);

  // Close the sidebar if big screen size is reached
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_MAX_WIDTH) {
        setSidebarActive(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Close the sidebar if user clicks outside of it
  useEffect(() => {
    const sidebar = sidebarRef.current;
    const sidebarButton = sidebarButtonRef.current;
    const handleClick = (e: MouseEvent) => {
      if (
        sidebarActive &&
        !sidebar!.contains(e.target as Node) &&
        !sidebarButton!.contains(e.target as Node)
      )
        setSidebarActive(false);
    };
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [sidebarActive]);

  const handleSidebarButtonClick = () => {
    setSidebarActive((prevValue) => !prevValue);
  };

  return (
    <div id='content' className={theme}>
      <header ref={headerRef}>
        <button
          ref={sidebarButtonRef}
          className='sidebar-button'
          onClick={handleSidebarButtonClick}
        >
          <i className={`fa-solid ${sidebarActive ? 'fa-xmark' : 'fa-bars'}`} />
        </button>
        <h1 id='site-title'>
          <Link to='/'>theodepinho.net</Link>
        </h1>
        <Navigation className='header-nav' withAnimatedUnderline={true} />
        <div className='header-right-cell'>
          <ThemeSwitcher />
        </div>
      </header>
      <div
        className={`sidebar-overlay ${sidebarActive ? 'active' : 'inactive'}`}
      ></div>
      <aside
        ref={sidebarRef}
        className={`sidebar ${sidebarActive ? 'active' : 'inactive'}`}
      >
        <Navigation
          className={`sidebar-nav ${sidebarActive ? 'active' : 'inactive'}`}
          onLinkClick={() => setSidebarActive(false)}
        />
      </aside>
      <main ref={mainRef}>
        <Outlet />
      </main>
    </div>
  );
}

export default PageFound_ThemeLight;
