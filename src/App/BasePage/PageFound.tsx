import { Link } from 'react-router-dom';
import { useContext } from 'react';

import './PageFound.css';
import AsideLeft from './PageFound/AsideLeft';
import AsideRight from './PageFound/AsideRight';
import Main from './PageFound/Main';
import AsideTop from './PageFound/AsideTop';
import { ThemeContext, Theme } from '../../Theme';

function PageFound() {
  const { theme } = useContext(ThemeContext);
  return (
    <div id='content' className={theme}>
      <header>
        <h1 id='site-title'>
          <Link to='/'>theodepinho.net</Link>
        </h1>
      </header>
      <AsideTop />
      {theme === Theme.DARK && (
        <>
          <AsideLeft />
          <AsideRight />
        </>
      )}
      <Main />
    </div>
  );
}

export default PageFound;
