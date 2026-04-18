import "./Projects.css";
import ProjectCard from "./Projects/ProjectCard";

const Projects = () => {
  return (
    <section id="projects">
      <h3>Exemples de projets réalisés</h3>
      <div className="projects-grid">
        <ProjectCard
          imgSrc="projects/cohortis.webp"
          imgAlt="Screenshot of the Cohortis web application"
          projectTitle="Cohortis"
          projectDescription="Site web de gestion des comités de sélection
              d'enseignants-chercheureuses"
        />
        <ProjectCard
          imgSrc="projects/boutique-en-ligne.webp"
          imgAlt="Screenshot of the online shopping application"
          projectTitle="Interface de boutique en ligne"
          projectDescription="Interface avec système de catalogue et de panier"
        />
        <ProjectCard
          imgSrc="projects/food-shopping-list.webp"
          imgAlt="Screenshot of Food Shopping List"
          projectTitle="Food Shopping List"
          projectDescription="Générateur de listes de courses alimentaires"
        />
      </div>
    </section>
  );
};

export default Projects;
