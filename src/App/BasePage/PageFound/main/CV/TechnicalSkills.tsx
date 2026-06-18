import { useContext } from 'react';

import { ThemeContext, Theme } from '@/Theme';
import { Technology } from '@/types/Technology';

import './TechnicalSkills.css';
import SkillCard from './TechnicalSkills/SkillCard';

const TechnicalSkills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section>
      <h3>Compétences techniques</h3>
      <div id='technical-skills-grid'>
        <SkillCard technology={Technology.JAVA} />
        <SkillCard technology={Technology.PYTHON} />
        <SkillCard technology={Technology.HTML} />
        <SkillCard technology={Technology.CSS} />
        <SkillCard technology={Technology.JAVASCRIPT} />
        <SkillCard technology={Technology.TYPESCRIPT} />
        <SkillCard technology={Technology.ANGULAR} />
        <SkillCard technology={Technology.REACT} />
        <SkillCard technology={Technology.POSTGRESQL} />
        {theme === Theme.DARK && (
          <SkillCard technology={Technology.BASH_DARK} />
        )}
        {theme === Theme.LIGHT && (
          <SkillCard technology={Technology.BASH_LIGHT} />
        )}
        <SkillCard technology={Technology.GIT} />
        <SkillCard technology={Technology.DOCKER} />
      </div>
    </section>
  );
};

export default TechnicalSkills;
