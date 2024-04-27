import "../../styles/components/LanguagesTab.scss";
import { CiTrash } from "react-icons/ci";
import { LuPencilLine } from "react-icons/lu";

/* eslint-disable react/prop-types */
function LanguagesTab({ language }) {
  return (
    <div className="tab">
      <div className="tab__info">
        <h3 className="tab__info--title">{language.name}</h3>
        <div className="tab__info--details">
          <p className="tab__info--details-subtitle">{language.level}</p>{" "}
          &#8210;<span>{language.certificate}</span>
        </div>
      </div>
      <div className="tab__menu">
        <CiTrash className="tab__menu--trash" />
        <LuPencilLine className="tab__menu--pencil" />
      </div>
    </div>
  );
}

export default LanguagesTab;
