import { useContext } from 'react';

import { ThemeContext } from '@/Theme';
import { Technology } from '@/types/Technology';
import TechnologyLogo from '@/base-components/TechnologyLogo';

import './ProjectCard.css';

const ProjectCard = ({
  imgSrc,
  imgAlt,
  projectTitle,
  projectDescription,
  technologies,
}: {
  imgSrc: string;
  imgAlt: string;
  projectTitle: string;
  projectDescription: string;
  technologies: Technology[];
}) => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className={`project-card ${theme}`}>
      <img src={imgSrc} alt={imgAlt} height='153' />
      <div className='text-section'>
        <div className='caption'>
          <h4 className='title'>{projectTitle}</h4>
          <p className='description'>{projectDescription}</p>
        </div>
        <div className='technologies'>
          {technologies.map((technology) => (
            <TechnologyLogo
              key={technology}
              technology={technology}
              height={8}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
