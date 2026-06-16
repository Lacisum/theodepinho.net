import './Projects.css';
import ProjectCard from './Projects/ProjectCard';
import { Technology } from '../../../../../types/Technology';

const Projects = () => {
  return (
    <section>
      <h3>Exemples de projets réalisés</h3>
      <div className='projects-grid'>
        <ProjectCard
          imgSrc='projects/cohortis.webp'
          imgAlt="Capture d'écran de l'application Cohortis dans un navigateur web."
          projectTitle='Cohortis'
          projectDescription="Site web de gestion des comités de sélection
              d'enseignants-chercheureuses"
          technologies={[
            Technology.JAVA,
            Technology.POSTGRESQL,
            Technology.TYPESCRIPT,
            Technology.ANGULAR,
            Technology.DOCKER,
          ]}
        />
        <ProjectCard
          imgSrc='projects/boutique-en-ligne.webp'
          imgAlt="Capture d'écran du projet d'interface de boutique en ligne dans un navigateur web."
          projectTitle='Interface de boutique en ligne'
          projectDescription='Interface avec système de catalogue et de panier'
          technologies={[Technology.JAVASCRIPT, Technology.REACT]}
        />
        <ProjectCard
          imgSrc='projects/food-shopping-list.webp'
          imgAlt="Capture d'écran de Food Shopping List dans un terminal"
          projectTitle='Food Shopping List'
          projectDescription='Générateur de listes de courses alimentaires'
          technologies={[Technology.JAVA, Technology.PYTHON]}
        />
      </div>
    </section>
  );
};

export default Projects;
