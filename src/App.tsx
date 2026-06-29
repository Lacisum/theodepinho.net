import { BrowserRouter, Routes, Route } from 'react-router-dom';

import { ThemeContext, ThemeContextValue, useTheme } from '@/Theme';

import PageFound from './App/BasePage/PageFound';
import PageNotFound from './App/BasePage/PageNotFound';
import Home from './App/BasePage/PageFound/main/Home';
import CV from './App/BasePage/PageFound/main/CV';
import BasePage from './App/BasePage';
import Snake95 from './App/BasePage/PageFound/main/Snake95';

function App() {
  const [theme, setTheme] = useTheme();
  return (
    <ThemeContext value={{ theme, setTheme } as ThemeContextValue}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<BasePage />}>
            <Route path='' element={<PageFound />}>
              <Route
                index
                element={
                  <>
                    <title>Théo de Pinho</title>
                    <Home />
                  </>
                }
              />
              <Route
                path='cv'
                element={
                  <>
                    <title>CV - Théo de Pinho</title>
                    <CV />
                  </>
                }
              />
            </Route>
            <Route
              path='*'
              element={
                <>
                  <title>Page non trouvée - Théo de Pinho</title>
                  <PageNotFound />
                </>
              }
            />
          </Route>
          <Route path='/projects'>
            <Route
              path='snake-95'
              element={
                <>
                  <title>Snake 95 - Théo de Pinho</title>
                  <Snake95 />
                </>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeContext>
  );
}

export default App;
