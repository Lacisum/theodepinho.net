import { useContext } from 'react';

import './ProjectCard.css';
import { ThemeContext } from '../../../../../../Theme';

const ProjectCard = ({
  imgSrc,
  imgAlt,
  projectTitle,
  projectDescription,
}: {
  imgSrc: string;
  imgAlt: string;
  projectTitle: string;
  projectDescription: string;
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`project-card ${theme}`}>
      <img src={imgSrc} alt={imgAlt} height='153' />
      <div className='caption'>
        <h4 className='title'>{projectTitle}</h4>
        <p className='description'>{projectDescription}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
