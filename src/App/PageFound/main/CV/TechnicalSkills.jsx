import SkillCard from "./TechnicalSkills/SkillCard";
import "./TechnicalSkills.css";

const TechnicalSkills = () => {
  return (
    <section id="technicall-skills">
      <h2>Mes compétences techniques</h2>
      <div className="grid tech-skills-grid">
        <SkillCard
          imgSrc="logos/java-small.webp"
          alt="Java Logo"
          caption="Java"
        />
        <SkillCard
          imgSrc="logos/python-small.webp"
          alt="Python Logo"
          caption="Python"
        />
        <SkillCard
          imgSrc="logos/html-small.webp"
          alt="HTML Logo"
          caption="HTML"
        />
        <SkillCard imgSrc="logos/css-small.webp" alt="CSS Logo" caption="CSS" />
        <SkillCard
          imgSrc="logos/js-small.webp"
          alt="JavaScript Logo"
          caption="JavaScript"
        />
        <SkillCard
          imgSrc="logos/angular-small.webp"
          alt="Angular Logo"
          caption="Angular"
        />
        <SkillCard
          imgSrc="logos/reactjs-small.webp"
          alt="ReactJS Logo"
          caption="ReactJS"
        />
        <SkillCard
          imgSrc="logos/postgresql-small.webp"
          alt="PostgreSQL Logo"
          caption="PostgreSQL"
        />
        <SkillCard
          imgSrc="logos/bash-small.webp"
          alt="Bash Logo"
          caption="Bash"
        />
        <SkillCard imgSrc="logos/git-small.webp" alt="Git Logo" caption="Git" />
        <SkillCard
          imgSrc="logos/docker-small.webp"
          alt="Docker Logo"
          caption="Docker"
        />
      </div>
    </section>
  );
};

export default TechnicalSkills;
