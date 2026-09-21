import { useContext } from 'react';

import { HashLink } from 'react-router-hash-link';

import { ThemeContext } from '@/Theme';

import './Navigation.css';

const LINKS: {
  [path: string]: {
    content: string;
  };
} = {
  '/#welcome': {
    content: '🏠 Accueil',
  },
  '/#cv': {
    content: '📋 CV',
  },
  '/projects/snake-95': {
    content: '🐍 Snake 95',
  },
};

const Navigation = ({
  className = '',
  onLinkClick,
}: {
  className?: string;
  onLinkClick?: () => void;
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <nav className={`navigation ${theme} ${className}`}>
      <ul className={`nav-list ${theme}`}>
        {Object.entries(LINKS).map(([path, item]) => (
          <li key={path} className='nav-item'>
            <HashLink
              className={`nav-link ${theme}`}
              to={path}
              smooth
              onClick={onLinkClick}
            >
              {item.content}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
