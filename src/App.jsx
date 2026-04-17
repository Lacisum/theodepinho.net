import { BrowserRouter, Routes, Route } from "react-router-dom";

import PageFound from "./App/PageFound";
import PageNotFound from "./App/PageNotFound";
import Home from "./App/PageFound/main/Home";
import CV from "./App/PageFound/main/CV";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageFound />}>
          <Route index element={<Home />} />
          <Route path="/cv" element={<CV />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
