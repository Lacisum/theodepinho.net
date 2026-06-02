import { Link } from "react-router-dom";

import "./PageNotFound.css";

const PageNotFound = () => {
  return (
    <div id="page-not-found-block">
      <p id="page-not-found-sentence">Page non trouvée</p>
      <p>
        <Link to="/">Revenir à l'accueil</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
