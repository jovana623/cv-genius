import "../../styles/components/SkillsTab.scss";
import { IoIosClose } from "react-icons/io";

/* eslint-disable react/prop-types */
function SkillsTab({ skill }) {
  return (
    <div className="tab__container">
      <p className="tab__container--text">{skill}</p>
      <IoIosClose className="tab__container--icon" />
    </div>
  );
}

export default SkillsTab;
