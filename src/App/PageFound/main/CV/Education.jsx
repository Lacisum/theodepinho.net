import "./CV-list.css";

const Education = () => {
  return (
    <section id="education">
      <h3>Formation</h3>
      <ol className="cv-list">
        <li>
          <h4 className="title">
            Master d'informatique (parcours génie logiciel)
          </h4>
          <div className="details">
            2026 (en cours d'obtention), Université de Lille
          </div>
        </li>
        <li>
          <h4 className="title">Licence d'informatique</h4>
          <div className="details">2024, Université de Lille</div>
        </li>
        <li>
          <h4 className="title">Maîtrise de musicologie</h4>
          <div className="details">2022, Université de Lille</div>
        </li>
        <li>
          <h4 className="title">Licence de musicologie</h4>
          <div className="details">2021, Université de Lille</div>
        </li>
      </ol>
    </section>
  );
};

export default Education;
