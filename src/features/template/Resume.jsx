import "../../styles/components/Resume.scss";
import ContactInformations from "../contact/ContactInformations";
import ExperienceInformations from "../experence/ExperienceInformations";
import LanguageInformations from "../languages/LanguageInformations";
import ObjectiveInformations from "../objective/ObjectiveInformations";
import SkillsInformations from "../skills/SkillsInformations";
import ResumeHeader from "../contact/Profile";
import EducationInformations from "../education/EducationInformations";

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
          <LanguageInformations />
        </div>
        <div className="resume__side--right">
          <ObjectiveInformations />
          <ExperienceInformations />
          <EducationInformations />
        </div>
      </div>
    </div>
  );
}

export default Resume;
