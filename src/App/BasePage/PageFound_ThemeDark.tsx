import { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';

import { ThemeContext } from '@/Theme';

import './PageFound_ThemeDark.css';
import AsideLeft from './PageFound/AsideLeft';
import AsideRight from './PageFound/AsideRight';
import AsideTop from './PageFound/AsideTop';
import ThemeSwitcher from './ThemeSwitcher';

function PageFound_ThemeDark() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id='content' className={theme}>
      <header>
        <h1 id='site-title'>
          <Link to='/'>theodepinho.net</Link>
        </h1>
        <div className='theme-switch-wrapper'>
          <ThemeSwitcher />
        </div>
      </header>
      <AsideTop />
      <AsideLeft />
      <AsideRight />
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default PageFound_ThemeDark;
