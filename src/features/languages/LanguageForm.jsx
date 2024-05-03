import "../../styles/layout/FormLayout.scss";
import "../../styles/components/LanguageForm.scss";
import "../../styles/components/TextField.scss";
import LanguageLevelBox from "./LanguageLevelBox";
import InputField from "../../ui/InputField";
import { FaBookReader } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addLanguage } from "./languageSlice";
import { v4 as uuidv4 } from "uuid";

/* eslint-disable react/prop-types */
function LanguageForm({ onFormSubmit }) {
  const [languageLevel, setLanguageLevel] = useState(null);
  const dispath = useDispatch();

  function handleLanguageLevelClick(text) {
    setLanguageLevel(text);
  }

  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    const newLanguage = { id: uuidv4, level: languageLevel, ...data };
    dispath(addLanguage(newLanguage));
    console.log(newLanguage);
    onFormSubmit();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <InputField name="name" label="Language" register={register} />
      <p className="ability-text">Ability level</p>
      <div className="ability-fields">
        <LanguageLevelBox
          text="Elementary"
          icon={<FaBookReader />}
          onClick={handleLanguageLevelClick}
          isActive={languageLevel === "Elementary"}
        />
        <LanguageLevelBox
          text="Intermediate"
          icon={<FaPeopleArrows />}
          onClick={handleLanguageLevelClick}
          isActive={languageLevel === "Intermediate"}
        />
        <LanguageLevelBox
          text="Advanced"
          icon={<FaGraduationCap />}
          onClick={handleLanguageLevelClick}
          isActive={languageLevel === "Advanced"}
        />
        <LanguageLevelBox
          text="Native"
          icon={<FaTrophy />}
          onClick={handleLanguageLevelClick}
          isActive={languageLevel === "Native"}
        />
      </div>
      <p className="ability-text">
        Have you done any courses or got any certificates?
      </p>

      <InputField
        name="certificate"
        label="Course or certificate"
        register={register}
      />

      <div className="btn__container">
        <button className="btn__container--save" type="submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default LanguageForm;
