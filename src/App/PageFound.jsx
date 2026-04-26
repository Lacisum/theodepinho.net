import { Link } from "react-router-dom";

import "./PageFound.css";
import AsideLeft from "./PageFound/AsideLeft";
import AsideRight from "./PageFound/AsideRight";
import Main from "./PageFound/Main";
import AsideTop from "./PageFound/AsideTop";

function PageFound() {
  return (
    <div id="content">
      <header>
        <h1 id="site-title"><Link to="/">theodepinho.net</Link></h1>
      </header>
      <AsideTop />
      <AsideLeft />
      <AsideRight />
      <Main />
    </div>
  );
}

export default PageFound;
