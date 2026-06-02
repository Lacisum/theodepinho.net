import { Outlet } from "react-router-dom";
import { ChangeEventHandler, useContext } from "react";

import "./BasePage.css";
import { ThemeContext, Theme } from "../Theme";

const BasePage = () => {
    const { theme, setTheme } = useContext(ThemeContext);
    const handleThemeSwitchButtonChange: ChangeEventHandler<HTMLInputElement, HTMLInputElement> = (event) => {
        setTheme(event?.currentTarget?.checked ? Theme.DARK : Theme.LIGHT);
    }
    return (
        <div id="base-page" className={theme}>
            <div id="theme-switch-container">
                <label id="theme-switch-button" className={theme} title="Changer le thème">
                    <input type="checkbox" defaultChecked={theme === Theme.DARK} onChange={handleThemeSwitchButtonChange}/>
                    {theme === Theme.DARK && '☀️'}
                    {theme === Theme.LIGHT && '🌘'}
                </label>
            </div>
            <Outlet/>
        </div>
    );
}

export default BasePage;