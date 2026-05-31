import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageFound from "./AppPage/App/PageFound";
import PageNotFound from "./AppPage/App/PageNotFound";
import Home from "./AppPage/App/PageFound/main/Home";
import CV from "./AppPage/App/PageFound/main/CV";
import AppPage from "./AppPage/BasePage";
import { ThemeContext, useTheme } from "./Theme";

function App() {
  const [theme, setTheme] = useTheme();
  return (
    <ThemeContext value={{theme, setTheme}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppPage />}>
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
