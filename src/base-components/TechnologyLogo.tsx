import { Technology, TECHNOLOGY_LOGOS_PROPERTIES } from '../types/Technology';

const TechnologyLogo = ({
  technology,
  height = 40,
}: {
  technology: Technology;
  height?: number;
}) => {
  return (
    <img
      src={TECHNOLOGY_LOGOS_PROPERTIES[technology].imgSrc}
      alt={`Logo de ${TECHNOLOGY_LOGOS_PROPERTIES[technology].name}`}
      height={height}
    />
  );
};

export default TechnologyLogo;
