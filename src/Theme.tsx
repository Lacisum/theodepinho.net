import { createContext, useState } from 'react';

const THEME_KEY = 'theme';
export enum Theme {
  LIGHT = 'theme-light',
  DARK = 'theme-dark',
}
const parseTheme = (value: string | null) => {
  if (!value) return null;
  if ((Object.values(Theme) as string[]).includes(value)) return value as Theme;
  return null;
};

export interface ThemeContextValue {
  theme: Theme;
  setTheme: (newTheme: Theme) => void;
}

export const ThemeContext = createContext<ThemeContextValue>(null!);

export const useTheme = () => {
  const localStorageTheme = parseTheme(localStorage.getItem(THEME_KEY));
  const defaultTheme = (localStorageTheme ?? Theme.LIGHT) as Theme;
  const [theme, setThemeWithoutSavingIt] = useState(defaultTheme);
  const setTheme = (newTheme: Theme) => {
    setThemeWithoutSavingIt(newTheme);
    localStorage.setItem(THEME_KEY, newTheme);
  };
  return [theme, setTheme];
};
