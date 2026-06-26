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
          <Link className={`nav-link ${theme}`} to='/'>
            🏠 Accueil
          </Link>
        </li>
        <li className='nav-item'>
          <Link className={`nav-link ${theme}`} to='/cv'>
            📋 CV
          </Link>
        </li>
        <li className='nav-item'>
          <Link className={`nav-link ${theme}`} to='/projects/snake-95'>
            🐍 Snake 95
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
