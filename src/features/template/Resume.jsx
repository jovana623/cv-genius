import "../../styles/components/Resume.scss";
import ContactInformations from "../contact/ContactInformations";
import ExperenceInformations from "../experence/ExperenceInformations";
import LanguageInformations from "../languages/LanguageInformations";
import ObjectiveInformations from "../objective/ObjectiveInformations";
import SkillsInformations from "../skills/SkillsInformations";
import ResumeHeader from "./ResumeHeader";

function Resume() {
  const frontendDeveloper = [
    {
      title: "Frontend Developer",
      subtitle: "Open AI",
      location: "San Francisco, CA",
      startDate: "January 2020",
      endDate: "Present",
      description:
        "Responsible for developing responsive and dynamic user interfaces using modern frontend technologies such as HTML, CSS, and JavaScript. Proficient in React and other frontend frameworks.",
    },
  ];

  const csStudent = [
    {
      title: "Computer Science Student",
      subtitle: "MIT",
      location: "Cambridge, Massachusetts, USA",
      startDate: "September 2017",
      endDate: "June 2020",
      description: " ",
    },
  ];

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
          <ExperenceInformations list={frontendDeveloper} name="Experence" />
          <ExperenceInformations
            list={csStudent}
            name="Education"
            borderBottom="none"
          />
        </div>
      </div>
    </div>
  );
}

export default Resume;
