import { ChangeEvent, useContext } from 'react';

import { ThemeContext, Theme } from '@/Theme';

import './ThemeSwitcher.css';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeSwitchButtonChange = (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    setTheme(event.currentTarget.checked ? Theme.DARK : Theme.LIGHT);
  };

  return (
    <label id='theme-switch-button' className={theme} title='Changer le thème'>
      <input
        type='checkbox'
        defaultChecked={theme === Theme.DARK}
        onChange={handleThemeSwitchButtonChange}
      />
      <i
        className={`fa-regular ${theme === Theme.LIGHT ? 'fa-sun' : 'fa-moon'}`}
      />
    </label>
  );
};

export default ThemeSwitcher;
