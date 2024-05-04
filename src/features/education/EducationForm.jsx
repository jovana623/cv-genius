import { useState } from "react";
import "../../styles/layout/FormLayout.scss";
import ExpEduFormPattern from "../../ui/ExpEduFormPattern";
import Tab from "../../ui/Tab";
import AddFormContainer from "../../ui/AddFormContainer";
import { useDispatch, useSelector } from "react-redux";
import { addEducation, deleteEducation } from "./educationSlice";

const fieldNames = ["Degree", "School", "City", "Description"];

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

  function handleCancel() {
    setIsFormVisible(false);
  }

  return (
    <div className="form__container">
      <h1 className="form__container--title">Education</h1>
      {isFormVisible ? (
        <ExpEduFormPattern
          onSuccess={handleFormSubmit}
          fieldNames={fieldNames}
          onCancel={handleCancel}
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
