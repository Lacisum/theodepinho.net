import { Link } from "react-router-dom";

import "./AsideLeft.css";

const AsideLeft = () => {
  return (
    <aside id="aside-left" className="base-background-color">
      <h2>Navigation</h2>
      <nav>
        <ul>
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/cv">CV</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default AsideLeft;
