import { useContext } from 'react';

import { Theme, ThemeContext } from '@/Theme';

import PageFound_ThemeDark from './PageFound_ThemeDark';
import PageFound_ThemeLight from './PageFound_ThemeLight';

const PageFound = () => {
  const { theme } = useContext(ThemeContext);

  return theme === Theme.LIGHT ? (
    <PageFound_ThemeLight />
  ) : (
    <PageFound_ThemeDark />
  );
};

export default PageFound;
