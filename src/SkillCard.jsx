import './SkillCard.css';

const SkillCard = ({ imgSrc, imgAlt, caption }) => {
  return (
    <figure className="skill-card">
      <img
        src={imgSrc}
        alt={imgAlt}
        height="48"
      />
      <figcaption>{caption}</figcaption>
    </figure>
  );
};

export default SkillCard;
