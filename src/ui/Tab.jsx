import "../styles/components/Tab.scss";
import { CiTrash } from "react-icons/ci";
import { LuPencilLine } from "react-icons/lu";

/* eslint-disable react/prop-types */
function Tab({ data, onDelete }) {
  console.log(data);

  const handleDelete = () => {
    onDelete(data.id);
  };

  return (
    <div className="tab">
      <div className="tab__details">
        <h3 className="tab__details--title">{data.title}</h3>
        <div className="tab__details--other">
          <p className="tab__details--other--subtitle">{data.subtitle}</p>
          <span>
            &#183; {data.startDate} - {data.endDate}
          </span>
        </div>
      </div>
      <div className="tab__menu">
        <button className="tab__menu--btn">
          <LuPencilLine className="tab__menu--pencil" />
        </button>
        <button className="tab__menu--btn" onClick={handleDelete}>
          <CiTrash className="tab__menu--trash" />
        </button>
      </div>
    </div>
  );
}

export default Tab;
