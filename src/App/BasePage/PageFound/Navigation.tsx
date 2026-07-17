import { useContext } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { ThemeContext } from '@/Theme';

import './Navigation.css';

const Navigation = ({
  className,
  onLinkClick,
}: {
  className: string;
  onLinkClick?: () => void;
}) => {
  const { theme } = useContext(ThemeContext);
  const activePath = useLocation().pathname;

  const links = [
    {
      to: '/',
      content: '🏠 Accueil',
    },
    {
      to: '/cv',
      content: '📋 CV',
    },
    {
      to: '/projects/snake-95',
      content: '🐍 Snake 95',
    },
  ];

  return (
    <nav className={`navigation ${theme} ${className}`}>
      <ul className={`nav-list ${theme}`}>
        {links.map((link) => (
          <li key={link.to} className='nav-item'>
            <Link
              className={`nav-link ${theme} ${activePath !== undefined && link.to === activePath ? 'active' : ''}`}
              to={link.to}
              onClick={onLinkClick}
            >
              {link.content}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navigation;
