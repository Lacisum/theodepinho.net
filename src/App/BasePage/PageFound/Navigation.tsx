import { useContext } from 'react';
import { Link } from 'react-router-dom';

import { ThemeContext } from '@/Theme';

import './Navigation.css';

const Navigation = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav>
      <ul className={`nav-list ${theme}`}>
        <li className='nav-item'>
          <Link className='nav-link' to='/'>
            🏠 Accueil
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/cv'>
            📋 CV
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
