import "../styles/components/Tab.scss";
import { CiTrash } from "react-icons/ci";
import { LuPencilLine } from "react-icons/lu";
import Modal from "./Modal";
import DeleteWindow from "./DeleteWindow";

/* eslint-disable react/prop-types */
function Tab({ data, onDelete }) {
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

        <Modal>
          <Modal.Open opens="test">
            <button className="tab__menu--btn">
              <CiTrash className="tab__menu--trash" />
            </button>
          </Modal.Open>
          <Modal.Window name="test">
            <div className="test">
              <DeleteWindow name={data.title} onConfirm={handleDelete} />
            </div>
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}

export default Tab;
