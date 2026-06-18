import { useContext } from 'react';
import { Outlet } from 'react-router-dom';

import { ThemeContext } from '@/Theme';

import './Main.css';

const Main = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <main className={theme}>
      <Outlet />
    </main>
  );
};

export default Main;
