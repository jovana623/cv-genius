import EditBar from "../features/preview/EditBar";
import Resume from "../features/template/Resume";
import "../styles/pages/Preview.scss";

function Preview() {
  return (
    <div className="preview-container">
      <div className="preview-container__resume">
        <Resume />
      </div>
      <div className="preview-container__bar">
        <EditBar />
      </div>
    </div>
  );
}

export default Preview;
