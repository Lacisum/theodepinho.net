import "./SkillCard.css";

const SkillCard = ({ imgSrc, imgAlt, caption }) => {
  return (
    <div className="skill-card">
      <img src={imgSrc} alt={imgAlt} height="40" />
      <div className="caption">{caption}</div>
    </div>
  );
};

export default SkillCard;
