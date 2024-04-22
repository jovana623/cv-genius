import "../../styles/components/SkillsInformations.scss";

function SkillsInformations() {
  const skillsList = ["HTML & CSS", "React", "JavaScript", "Python"];
  return (
    <div className="skills__container">
      <div className="skills__container--title">SKILLS</div>
      <ul className="skills__container--list">
        {skillsList.map((skill, index) => (
          <li key={index} className="skills__container--list--item">
            {skill}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SkillsInformations;
