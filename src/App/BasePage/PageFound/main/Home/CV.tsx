import Education from './CV/Education';
import Projects from './CV/Projects';
import ProfessionalExperiences from './CV/ProfessionalExperiences';
import TechnicalSkills from './CV/TechnicalSkills';

const CV = () => {
  return (
    <section id='cv'>
      <div id='cv-content'>
        <h2>Curriculum Vitae</h2>
        <ProfessionalExperiences />
        <Education />
        <TechnicalSkills />
        <Projects />
      </div>
    </section>
  );
};

export default CV;
