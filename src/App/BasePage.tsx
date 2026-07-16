import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeContext } from '@/Theme';

import './BasePage.css';

const BasePage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div id='base-page' className={theme}>
      <Outlet />
    </div>
  );
};

export default BasePage;
