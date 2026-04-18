import { Link } from "react-router-dom";
import Navigation from "./Navigation";

const AsideLeft = () => {
  return (
    <aside id="aside-left">
      <section>
        <h3>Navigation</h3>
        <Navigation />
      </section>
    </aside>
  );
};

export default AsideLeft;
