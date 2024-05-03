import "../styles/components/DeleteWindow.scss";
import { TiWarningOutline } from "react-icons/ti";

/* eslint-disable react/prop-types */
function DeleteWindow({ onConfirm }) {
  return (
    <div className="delete">
      <div className="delete__icon">
        <TiWarningOutline />
      </div>
      <div className="delete__details">
        <p className="delete__details--title">Are you sure?</p>
        <p className="delete__details--text">
          This action cannot be undone. All data from this tab will be
          permanently deleted.
        </p>
      </div>
      <div className="delete__btn">
        <button className="btn delete__btn--cancel">Cancel</button>
        <button className="btn delete__btn--confirm" onClick={onConfirm}>
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteWindow;
