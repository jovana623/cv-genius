import { CiCirclePlus } from "react-icons/ci";
import "../styles/components/AddFormContainer.scss";

/* eslint-disable react/prop-types */
function AddFormContainer({ onClick, children }) {
  return (
    <div className="add__container">
      <button onClick={onClick} className="add__container--btn">
        <CiCirclePlus /> <span>Add {children}</span>
      </button>
    </div>
  );
}

export default AddFormContainer;
