import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import PageFound from "./PageFound";
import PageNotFound from "./PageNotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageFound />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
