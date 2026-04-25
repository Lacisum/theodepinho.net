import SkillCard from "./TechnicalSkills/SkillCard";
import "./TechnicalSkills.css";

const TechnicalSkills = () => {
  return (
    <section>
      <h3>Compétences techniques</h3>
      <div id="technical-skills-grid">
        <SkillCard
          imgSrc="logos/java-small.webp"
          alt="Logo de Java"
          caption="Java"
        />
        <SkillCard
          imgSrc="logos/python-small.webp"
          alt="Logo de Python"
          caption="Python"
        />
        <SkillCard
          imgSrc="logos/html-small.webp"
          alt="Logo de HTML"
          caption="HTML"
        />
        <SkillCard imgSrc="logos/css-small.webp" alt="Logo de CSS" caption="CSS" />
        <SkillCard
          imgSrc="logos/js-small.webp"
          alt="Logo de JavaScript"
          caption="JavaScript"
        />
        <SkillCard
          imgSrc="logos/angular-small.webp"
          alt="Logo d'Angular"
          caption="Angular"
        />
        <SkillCard
          imgSrc="logos/reactjs-small.webp"
          alt="Logo de ReactJS"
          caption="ReactJS"
        />
        <SkillCard
          imgSrc="logos/postgresql-small.webp"
          alt="Logo de PostgreSQL"
          caption="PostgreSQL"
        />
        <SkillCard
          imgSrc="logos/bash-small.webp"
          alt="Logo de Bash"
          caption="Bash"
        />
        <SkillCard imgSrc="logos/git-small.webp" alt="Logo de Git" caption="Git" />
        <SkillCard
          imgSrc="logos/docker-small.webp"
          alt="Logo de Docker"
          caption="Docker"
        />
      </div>
    </section>
  );
};

export default TechnicalSkills;
