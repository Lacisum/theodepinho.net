import './SkillCard.css';

const SkillCard = ({ imgSrc, imgAlt, caption }) => {
  return (
    <div className="skill-card">
      <img
        src={imgSrc}
        alt={imgAlt}
      />
      <div class="caption">{caption}</div>
    </div>
  );
};

export default SkillCard;
