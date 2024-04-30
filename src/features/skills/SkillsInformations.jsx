import "../../styles/components/SkillsInformations.scss";
import { useSelector } from "react-redux";

function SkillsInformations() {
  const skillsList = useSelector((state) => state.skills);
  return (
    <div className="skills__container">
      <div className="skills__container--title">SKILLS</div>
      <ul className="skills__container--list">
        {skillsList.map((skill, index) => (
          <li key={index} className="skills__container--list--item">
            {skill.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsInformations;
