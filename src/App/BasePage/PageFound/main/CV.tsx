import Education from './CV/Education';
import Projects from './CV/Projects';
import ProfessionalExperiences from './CV/ProfessionalExperiences';
import TechnicalSkills from './CV/TechnicalSkills';

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
