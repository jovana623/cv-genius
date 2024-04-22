import { NavLink } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import "../../styles/components/PreviewButton.scss";

function PreviewButton() {
  return (
    <NavLink to="#" className="link">
      <button className="preview__btn">
        <div className="preview__btn--icon">
          <FaEye />
        </div>
        <span className="preview__btn--text">Preview</span>
      </button>
    </NavLink>
  );
}

export default PreviewButton;
