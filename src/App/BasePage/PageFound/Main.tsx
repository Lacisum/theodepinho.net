import { useContext } from 'react';

import './Main.css';
import { Outlet } from 'react-router-dom';
import { ThemeContext } from '../../../Theme';

const Main = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme}>
      <Outlet />
    </main>
  );
};

export default Main;
