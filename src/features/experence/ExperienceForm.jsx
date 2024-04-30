import { useState } from "react";
import "../../styles/components/ExperenceForm.scss";
import "../../styles/layout/FormLayout.scss";
import ExpEduFormPattern from "../../ui/ExpEduFormPattern";
import Tab from "../../ui/Tab";
import AddFormContainer from "../../ui/AddFormContainer";
import { useDispatch, useSelector } from "react-redux";
import { addExperience, deleteExperence } from "./experienceSlice";

const fieldNames = [
  "Title/Position",
  "Company",
  "Location (City/State)",
  "Description",
];

function ExperenceForm() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const experenceList = useSelector((state) => state.experience);
  const dispatch = useDispatch();

  function handleFormSubmit(data) {
    setIsFormVisible(false);
    dispatch(addExperience(data));
  }

  function handleDelete(id) {
    dispatch(deleteExperence(id));
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
          {experenceList.map((experience, index) => (
            <Tab key={index} data={experience} onDelete={handleDelete} />
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
