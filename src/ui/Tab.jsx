import "../styles/components/Tab.scss";
import { CiTrash } from "react-icons/ci";
import { LuPencilLine } from "react-icons/lu";

/* eslint-disable react/prop-types */
function Tab({ array }) {
  return (
    <div className="tab">
      <div className="tab__details">
        <h3 className="tab__details--title">{array.title}</h3>
        <div className="tab__details--other">
          <p className="tab__details--other--subtitle">{array.subtitle}</p>
          <span>
            &#183; {array.startDate} - {array.endDate}
          </span>
        </div>
      </div>
      <div className="tab__menu">
        <LuPencilLine className="tab__menu--pencil" />
        <CiTrash className="tab__menu--trash" />
      </div>
    </div>
  );
}

export default Tab;
