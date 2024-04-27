import { useState } from "react";
import "../../styles/components/ExperenceForm.scss";
import "../../styles/layout/FormLayout.scss";
import ExpEduFormPattern from "../../ui/ExpEduFormPattern";
import Tab from "../../ui/Tab";
import AddFormContainer from "../../ui/AddFormContainer";

const fieldNames = [
  "Title/Position",
  "Company",
  "Location (City/State)",
  "Description",
];

const initialExperence = [
  {
    title: "Frontend Developer",
    subtitle: "Meta",
    location: "San Francisco",
    startDate: "May 2017",
    endDate: "September 2022",
    description: "Some description goes here",
  },
];

function ExperenceForm() {
  const [isFormVisible, setIsFormVisible] = useState(true);

  function handleFormSubmit() {
    setIsFormVisible(false);
  }

  return (
    <div className="form__container">
      <h1 className="form__container--title">
        Great! Lets fill out your work experience next
      </h1>
      <p className="form__container--subtitle">
        Start with your most recent position and work backwards. Just add the
        most recent and relevant positions if you have lots of experience.
      </p>
      {isFormVisible ? (
        <ExpEduFormPattern
          onSuccess={handleFormSubmit}
          fieldNames={fieldNames}
        />
      ) : (
        <div>
          {initialExperence.map((experience, index) => (
            <Tab key={index} array={experience} />
          ))}
          <AddFormContainer onClick={() => setIsFormVisible(!isFormVisible)}>
            Experence
          </AddFormContainer>
        </div>
      )}
    </div>
  );
}

export default ExperenceForm;
