import "./Navigation.css";

import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav>
      <ul className="nav-list">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Accueil
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/cv">
            CV
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
