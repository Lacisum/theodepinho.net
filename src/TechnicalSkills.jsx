import SkillCard from "./SkillCard";
import "./TechnicalSkills.css";

const TechnicalSkills = () => {
  return (
    <section id="technicall-skills">
      <h2>Mes compétences techniques</h2>
      <div className="grid tech-skills-grid">
        <SkillCard imgSrc="logos/java.webp" alt="Java Logo" caption="Java" />
        <SkillCard imgSrc="logos/python.webp" alt="Python Logo" caption="Python" />
        <SkillCard imgSrc="logos/html.webp" alt="HTML Logo" caption="HTML" />
        <SkillCard imgSrc="logos/css.webp" alt="CSS Logo" caption="CSS" />
        <SkillCard imgSrc="logos/js.webp" alt="JavaScript Logo" caption="JavaScript" />
        <SkillCard imgSrc="logos/angular.webp" alt="Angular Logo" caption="Angular" />
        <SkillCard imgSrc="logos/reactjs.webp" alt="ReactJS Logo" caption="ReactJS" />
        <SkillCard imgSrc="logos/postgresql.webp" alt="PostgreSQL Logo" caption="PostgreSQL" />
        <SkillCard imgSrc="logos/bash.webp" alt="Bash Logo" caption="Bash" />
        <SkillCard imgSrc="logos/git.webp" alt="Git Logo" caption="Git" />
        <SkillCard imgSrc="logos/docker.webp" alt="Docker Logo" caption="Docker" />
      </div>
    </section>
  );
};

export default TechnicalSkills;
