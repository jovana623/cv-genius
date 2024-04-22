import "../../styles/components/Resume.scss";
import ContactInformations from "../contact/ContactInformations";
import SkillsInformations from "../skills/SkillsInformations";
import ResumeHeader from "./ResumeHeader";

function Resume() {
  return (
    <div className="resume">
      <div>
        <ResumeHeader />
      </div>
      <div className="resume__main-info">
        <div className="resume__side--left">
          <ContactInformations />
          <SkillsInformations />
          <p>Languages</p>
        </div>
        <div className="resume__side--right">
          <p>Objective</p>
          <p>Experence</p>
          <p>Education</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
