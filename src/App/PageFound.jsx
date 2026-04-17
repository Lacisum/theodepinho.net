import { Link, Outlet } from "react-router-dom";

import "./PageFound.css";
import AsideLeft from "./PageFound/AsideLeft";
import AsideRight from "./PageFound/AsideRight";

function PageFound() {
  return (
    <div id="content">
      <header>
        <h1>theodepinho.net</h1>
      </header>
      <AsideLeft />
      <AsideRight />
      <main className="base-background-color">
        <Outlet />
      </main>
    </div>
  );
}

export default PageFound;
