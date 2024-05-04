import { NavLink } from "react-router-dom";
import { IoExpandOutline } from "react-icons/io5";
import "../../styles/components/PreviewButton.scss";

function PreviewButton() {
  return (
    <NavLink to="/preview" className="link">
      <button className="preview__btn">
        <div className="preview__btn--icon">
          <IoExpandOutline />
        </div>
        <span className="preview__btn--text">Preview</span>
      </button>
    </NavLink>
  );
}

export default PreviewButton;
