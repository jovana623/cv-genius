import "../../styles/layout/FormLayout.scss";
import "../../styles/components/SkillsLanguageForm.scss";
import { useState } from "react";
import Skills from "./Skills";
import SkillsTab from "./SkillsTab";
import LanguageForm from "../languages/LanguageForm";
import LanguagesTab from "../languages/LanguagesTab";
import AddFormContainer from "../../ui/AddFormContainer";
import { useSelector } from "react-redux";

function SkillsLanguageForm() {
  const [isFormVisible, setIsFormVisible] = useState(false);
  const skillsList = useSelector((state) => state.skills);
  const languageList = useSelector((state) => state.language);

  function handleFormSubmit() {
    setIsFormVisible(false);
  }

  return (
    <div className="form__container">
      {!isFormVisible && (
        <>
          <h1 className="form__container--title">
            Almost finished the basics! Just add a list of skills
          </h1>
          <p className="form__container--subtitle">
            The skills you add should reflect the requirements of the job you
            are applying for.
          </p>
          <Skills />
          <div className="skill__list">
            {skillsList.map((skill) => (
              <SkillsTab key={skill.id} skill={skill} />
            ))}
          </div>
        </>
      )}
      <h1 className="form__container--title">Speak multiple languages?</h1>
      <p className="form__container--subtitle">
        Add your languages and levels of ability here (only if you speak more
        than one language).
      </p>
      {isFormVisible ? (
        <LanguageForm onFormSubmit={handleFormSubmit} />
      ) : (
        <>
          {languageList.map((language) => (
            <LanguagesTab key={language.id} language={language} />
          ))}
          <AddFormContainer onClick={() => setIsFormVisible(!isFormVisible)}>
            Language
          </AddFormContainer>
        </>
      )}
    </div>
  );
}

export default SkillsLanguageForm;
