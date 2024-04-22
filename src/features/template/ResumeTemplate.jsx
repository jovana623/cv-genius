import "../../styles/components/ResumeTemplate.scss";
import PreviewButton from "./PreviewButton";
import Resume from "./Resume";

function ResumeTemplate() {
  return (
    <div className="template">
      <div className="template__preview">
        <div>
          <PreviewButton />
        </div>
      </div>
      <div className="template__resume">
        <Resume />
      </div>
    </div>
  );
}

export default ResumeTemplate;
