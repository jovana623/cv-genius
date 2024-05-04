import "../../styles/components/AddFieldsBtn.scss";
import { CiCirclePlus } from "react-icons/ci";

/* eslint-disable react/prop-types */
function AddFieldBtn({ text, onClick }) {
  return (
    <div className="add__fields">
      <button className="add__fields--btn" onClick={onClick}>
        <CiCirclePlus />
        <span>{text}</span>
      </button>
    </div>
  );
}

export default AddFieldBtn;
