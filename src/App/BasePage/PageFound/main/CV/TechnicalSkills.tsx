import { useContext } from 'react';

import './TechnicalSkills.css';
import SkillCard from './TechnicalSkills/SkillCard';
import { ThemeContext, Theme } from '../../../../../Theme';

const TechnicalSkills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <section>
      <h3>Compétences techniques</h3>
      <div id='technical-skills-grid'>
        <SkillCard
          imgSrc='logos/java-small.webp'
          imgAlt='Logo de Java'
          caption='Java'
        />
        <SkillCard
          imgSrc='logos/python-small.webp'
          imgAlt='Logo de Python'
          caption='Python'
        />
        <SkillCard
          imgSrc='logos/html-small.webp'
          imgAlt='Logo de HTML'
          caption='HTML'
        />
        <SkillCard
          imgSrc='logos/css-small.webp'
          imgAlt='Logo de CSS'
          caption='CSS'
        />
        <SkillCard
          imgSrc='logos/javascript-small.webp'
          imgAlt='Logo de JavaScript'
          caption='JavaScript'
        />
        <SkillCard
          imgSrc='logos/typescript-small.webp'
          imgAlt='Logo de TypeScript'
          caption='TypeScript'
        />
        <SkillCard
          imgSrc='logos/angular-small.webp'
          imgAlt="Logo d'Angular"
          caption='Angular'
        />
        <SkillCard
          imgSrc='logos/reactjs-small.webp'
          imgAlt='Logo de ReactJS'
          caption='ReactJS'
        />
        <SkillCard
          imgSrc='logos/postgresql-small.webp'
          imgAlt='Logo de PostgreSQL'
          caption='PostgreSQL'
        />
        {theme === Theme.DARK && (
          <SkillCard
            imgSrc='logos/bash-small-white.webp'
            imgAlt='Logo de Bash'
            caption='Bash'
          />
        )}
        {theme === Theme.LIGHT && (
          <SkillCard
            imgSrc='logos/bash-small-black.webp'
            imgAlt='Logo de Bash'
            caption='Bash'
          />
        )}
        <SkillCard
          imgSrc='logos/git-small.webp'
          imgAlt='Logo de Git'
          caption='Git'
        />
        <SkillCard
          imgSrc='logos/docker-small.webp'
          imgAlt='Logo de Docker'
          caption='Docker'
        />
      </div>
    </section>
  );
};

export default TechnicalSkills;
