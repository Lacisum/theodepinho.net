import "./ProjectCard.css";

const ProjectCard = ({ imgSrc, imgAlt, projectTitle, projectDescription }) => {
  return (
    <div className="project-card">
      <img src={imgSrc} alt={imgAlt} height="153" />
      <div className="caption">
        <h4 className="title">{projectTitle}</h4>
        <p className="description">{projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
