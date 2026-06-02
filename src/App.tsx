import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageFound from "./App/BasePage/PageFound";
import PageNotFound from "./App/BasePage/PageNotFound";
import Home from "./App/BasePage/PageFound/main/Home";
import CV from "./App/BasePage/PageFound/main/CV";
import BasePage from "./App/BasePage";
import { ThemeContext, ThemeContextValue, useTheme } from "./Theme";

function App() {
  const [theme, setTheme] = useTheme();
  return (
    <ThemeContext value={{theme, setTheme} as ThemeContextValue}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BasePage />}>
            <Route path="/" element={<PageFound />}>
              <Route index element={<Home />} />
              <Route path="/cv" element={<CV />} />
            </Route>
            <Route path="*" element={<PageNotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext>
  );
}

export default App;
