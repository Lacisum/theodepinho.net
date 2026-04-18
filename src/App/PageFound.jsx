import { Link, Outlet } from "react-router-dom";

import "./PageFound.css";
import AsideLeft from "./PageFound/AsideLeft";
import AsideRight from "./PageFound/AsideRight";
import Main from "./PageFound/Main";
import AsideTop from "./PageFound/AsideTop";

function PageFound() {
  return (
    <div id="content">
      <header>
        <h1>theodepinho.net</h1>
      </header>
      <AsideTop />
      <AsideLeft />
      <AsideRight />
      <Main />
    </div>
  );
}

export default PageFound;
