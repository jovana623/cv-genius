import { useState } from "react";
import "../../styles/layout/FormLayout.scss";
import ExpEduFormPattern from "../../ui/ExpEduFormPattern";
import Tab from "../../ui/Tab";
import AddFormContainer from "../../ui/AddFormContainer";

const fieldNames = [
  "Degree(s)",
  "Name of school/institution",
  "Location (City/State)",
  "Description",
];

export const initialEducation = [
  {
    title: "Bachelor CS",
    subtitle: "MIT",
    location: "Massachusetts",
    startDate: "September 2014",
    endDate: "May 2017",
    description: "Some description for education goes here",
  },
];

function EducationForm() {
  const [isFormVisible, setIsFormVisible] = useState(true);

  function handleFormSubmit() {
    setIsFormVisible(false);
  }

  return (
    <div className="form__container">
      <h1 className="form__container--title">
        Awesome! Now, what qualifications do you have?
      </h1>
      <p className="form__container--subtitle">
        Start with your most recent period of education and work backwards. If
        you have many, just add the most recent and relevant ones.
      </p>
      {isFormVisible ? (
        <ExpEduFormPattern
          onSuccess={handleFormSubmit}
          fieldNames={fieldNames}
        />
      ) : (
        <div>
          {initialEducation.map((education, index) => (
            <Tab key={index} data={education} />
          ))}
          <AddFormContainer onClick={() => setIsFormVisible(!isFormVisible)}>
            Education
          </AddFormContainer>
        </div>
      )}
    </div>
  );
}

export default EducationForm;
