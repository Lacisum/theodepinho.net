import TechnologyLogo from '../../../../../../base-components/TechnologyLogo';
import {
  Technology,
  TECHNOLOGY_LOGOS_PROPERTIES,
} from '../../../../../../types/Technology';
import './SkillCard.css';

const SkillCard = ({ technology }: { technology: Technology }) => {
  return (
    <div className='skill-card'>
      <TechnologyLogo technology={technology} />
      <div className='caption'>
        {TECHNOLOGY_LOGOS_PROPERTIES[technology].name}
      </div>
    </div>
  );
};

export default SkillCard;
