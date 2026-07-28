import { useCallback, useContext, useEffect, useMemo, useRef } from 'react';

import { Link, useLocation } from 'react-router-dom';

import { ThemeContext } from '@/Theme';

import './Navigation.css';

const Navigation = ({
  className = '',
  onLinkClick,
  withAnimatedUnderline = false,
}: {
  className?: string;
  onLinkClick?: () => void;
  withAnimatedUnderline: boolean;
}) => {
  const { theme } = useContext(ThemeContext);
  const activePath = useLocation().pathname;
  const linksContainerRef = useRef<HTMLUListElement>(null);
  const underlineRef = useRef<HTMLDivElement>(null);
  const isInitialMountRef = useRef(true);
  // test
  const linksRefs = useRef<{
    [path: string]: HTMLElement;
  }>({});

  const links: {
    [path: string]: {
      content: string;
    };
  } = useMemo(
    () => ({
      '/': {
        content: '🏠 Accueil',
      },
      '/cv': {
        content: '📋 CV',
      },
      '/projects/snake-95': {
        content: '🐍 Snake 95',
      },
    }),
    [],
  );

  const alignUnderlineAndActiveLink = useCallback(
    (withTransition: boolean) => {
      const activeLink = linksRefs.current[activePath];
      const underline = underlineRef.current;
      const linksContainer = linksContainerRef.current;
      if (!activeLink || !underline || !linksContainer) return;

      if (withTransition) underline.classList.add('with-transition');
      else underline.classList.remove('with-transition');

      const left = activeLink.offsetLeft;
      const width = activeLink.offsetWidth;
      underline.style.left = `${left}px`;
      underline.style.width = `${width}px`;
    },
    [activePath],
  );

  const alignUnderlineAndActiveLinkWithTransition = useCallback(
    () => alignUnderlineAndActiveLink(true),
    [alignUnderlineAndActiveLink],
  );

  const alignUnderlineAndActiveLinkWithoutTransition = useCallback(
    () => alignUnderlineAndActiveLink(false),
    [alignUnderlineAndActiveLink],
  );

  // Align underline with active link on active link change
  useEffect(() => {
    const underline = underlineRef.current;
    if (
      !activePath ||
      Object.keys(links).find((path) => path === activePath) === undefined ||
      !underline
    )
      return;

    if (isInitialMountRef.current) {
      alignUnderlineAndActiveLinkWithoutTransition();
      isInitialMountRef.current = false;
    } else {
      alignUnderlineAndActiveLinkWithTransition();
    }
  }, [
    activePath,
    links,
    alignUnderlineAndActiveLinkWithoutTransition,
    alignUnderlineAndActiveLinkWithTransition,
  ]);

  // Adjust underline's width on font load
  useEffect(() => {
    let cancelled = false;
    if ('fonts' in document) {
      document.fonts.ready.then(() => {
        if (!cancelled) alignUnderlineAndActiveLinkWithoutTransition();
      });
    }

    return () => {
      cancelled = true;
    };
  }, [alignUnderlineAndActiveLinkWithoutTransition]);

  return (
    <nav className={`navigation ${theme} ${className}`}>
      <ul ref={linksContainerRef} className={`nav-list ${theme}`}>
        {Object.entries(links).map(([path, item]) => (
          <li key={path} className='nav-item'>
            <Link
              // Using a *ref callback* to set the ref only when the node is ready
              ref={(node) => {
                if (node !== null) {
                  linksRefs.current[path] = node;
                }
              }}
              className={`nav-link ${theme} ${activePath !== undefined && path === activePath ? 'active' : ''}`}
              to={path}
              onClick={onLinkClick}
            >
              {item.content}
            </Link>
          </li>
        ))}
        {withAnimatedUnderline && (
          <div
            ref={underlineRef}
            className='header-nav-underline'
            aria-hidden
          ></div>
        )}
      </ul>
    </nav>
  );
};

export default Navigation;
