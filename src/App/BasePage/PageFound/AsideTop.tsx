import { useContext } from 'react';

import { ThemeContext } from '@/Theme';

import './AsideTop.css';
import Navigation from './Navigation';

const AsideTop = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <aside id='aside-top' className={theme}>
      <Navigation />
    </aside>
  );
};

export default AsideTop;
