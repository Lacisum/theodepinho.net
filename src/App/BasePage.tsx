import { Outlet } from "react-router-dom";
import { useContext } from "react";

import "./BasePage.css";
import { ThemeContext, THEME_DARK, THEME_LIGHT } from "../Theme";

const BasePage = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const handleThemeSwitchButtonChange = (event) => {
        setTheme(event.currentTarget.checked ? THEME_DARK : THEME_LIGHT);
    }
    return (
        <div id="base-page" className={theme}>
            <div id="theme-switch-container">
                <label id="theme-switch-button" className={theme} title="Changer le thème">
                    <input type="checkbox" defaultChecked={theme === THEME_DARK} onChange={handleThemeSwitchButtonChange}/>
                    {theme === THEME_DARK && '☀️'}
                    {theme === THEME_LIGHT && '🌘'}
                </label>
            </div>
            <Outlet/>
        </div>
    );
}

export default BasePage;