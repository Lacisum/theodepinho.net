import './ProjectCard.css';

const ProjectCard = ({ imgSrc, imgAlt, projectTitle, projectDescription }) => {
  return (
    <figure className="project-card">
      <img
        src={imgSrc}
        alt={imgAlt}
        width="320"
        height="192"
      />
      <figcaption>
        <h3>{projectTitle}</h3>
        <p>{projectDescription}</p>
      </figcaption>
    </figure>
  );
};

export default ProjectCard;
