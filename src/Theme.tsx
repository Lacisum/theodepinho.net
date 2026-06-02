import { createContext, useState } from "react";

const THEME_KEY = 'theme';
export const THEME_LIGHT = "theme-light";
export const THEME_DARK = "theme-dark";

export const ThemeContext = createContext(THEME_LIGHT);

export const useTheme = () => {
    const defaultTheme = localStorage.getItem(THEME_KEY) ?? THEME_LIGHT;
    const [theme, setThemeWithoutSavingIt] = useState(defaultTheme);
    const setTheme = (newTheme) => {
        setThemeWithoutSavingIt(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
    }
    return [theme, setTheme];
};