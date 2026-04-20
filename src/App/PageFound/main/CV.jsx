import TechnicalSkills from "./CV/TechnicalSkills";
import Projects from "./CV/Projects";
import Education from "./CV/Education";
import ProfessionalExperiences from "./CV/ProfessionalExperiences";

const CV = () => {
  return (
    <>
      <h2>Curriculum Vitae</h2>
      <ProfessionalExperiences />
      <Education />
      <TechnicalSkills />
      <Projects />
    </>
  );
};

export default CV;
