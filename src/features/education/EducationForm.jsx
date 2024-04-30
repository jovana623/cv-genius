import { useState } from "react";
import "../../styles/layout/FormLayout.scss";
import ExpEduFormPattern from "../../ui/ExpEduFormPattern";
import Tab from "../../ui/Tab";
import AddFormContainer from "../../ui/AddFormContainer";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, deleteEducation } from "./educationSlice";

const fieldNames = [
  "Degree(s)",
  "Name of school/institution",
  "Location (City/State)",
  "Description",
];

function EducationForm() {
  const [isFormVisible, setIsFormVisible] = useState(true);
  const educationList = useSelector((state) => state.education);
  const dispatch = useDispatch();

  function handleFormSubmit(data) {
    setIsFormVisible(false);
    dispatch(addEducation(data));
  }

  function handleDelete(id) {
    dispatch(deleteEducation(id));
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
          {educationList.map((education, index) => (
            <Tab key={index} data={education} onDelete={handleDelete} />
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
