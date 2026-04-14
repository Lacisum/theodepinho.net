import './ProjectCard.css';

const ProjectCard = ({ imgSrc, imgAlt, projectTitle, projectDescription }) => {
  return (
    <div className="project-card">
      <img
        src={imgSrc}
        alt={imgAlt}
      />
      <div className="caption">
        <h3>{projectTitle}</h3>
        <p>{projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
