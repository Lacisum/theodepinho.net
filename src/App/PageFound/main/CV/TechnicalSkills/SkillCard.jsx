import "./SkillCard.css";

const SkillCard = ({ imgSrc, imgAlt, caption }) => {
  return (
    <div className="skill-card">
      <img src={imgSrc} alt={imgAlt} height="48" />
      <div className="caption">{caption}</div>
    </div>
  );
};

export default SkillCard;
