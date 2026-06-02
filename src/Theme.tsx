import { createContext, useState } from "react";

const THEME_KEY = 'theme';
export enum Theme {
    LIGHT = 'theme-light',
    DARK = 'theme-dark'
}
export interface ThemeContextValue {
    theme: Theme,
    setTheme: (newTheme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextValue>(null!);

export const useTheme = () => {
    const defaultTheme = (localStorage.getItem(THEME_KEY) ?? Theme.LIGHT) as Theme; // TODO: replace with robust parsing
    const [theme, setThemeWithoutSavingIt] = useState(defaultTheme);
    const setTheme = (newTheme: Theme) => {
        setThemeWithoutSavingIt(newTheme);
        localStorage.setItem(THEME_KEY, newTheme);
    }
    return [theme, setTheme];
};