import "./CV-list.css";

const ProfessionalExperiences = () => {
  return (
    <section id="professional-experiences">
      <h3>Expériences professionnelles</h3>
      <ol id="jobs-list" className="cv-list">
        <li className="job">
          <h4 className="title">
            Stage - Développement du site web <code>dezrann.net</code>
          </h4>
          <div className="details">
            Avril 2024 - Juillet 2024, CRIStAL, Algomus
          </div>
        </li>
      </ol>
    </section>
  );
};

export default ProfessionalExperiences;
