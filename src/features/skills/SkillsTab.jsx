import { useDispatch } from "react-redux";
import "../../styles/components/SkillsTab.scss";
import { IoIosClose } from "react-icons/io";
import { deleteSkill } from "./skillsSlice";

/* eslint-disable react/prop-types */
function SkillsTab({ skill }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteSkill(skill.id));
  }
  console.log(skill);
  return (
    <div className="tab__container">
      <p className="tab__container--text">{skill.name}</p>
      <button onClick={handleDelete} className="tab__container--btn">
        <IoIosClose className="tab__container--icon" />
      </button>
    </div>
  );
}

export default SkillsTab;
