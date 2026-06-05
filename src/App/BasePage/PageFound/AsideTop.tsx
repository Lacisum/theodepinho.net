import { useContext } from 'react';

import './AsideTop.css';
import Navigation from './Navigation';
import { ThemeContext } from '../../../Theme';

const AsideTop = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <aside id='aside-top' className={theme}>
      <Navigation />
    </aside>
  );
};

export default AsideTop;
