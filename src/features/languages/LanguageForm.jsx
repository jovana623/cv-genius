import "../../styles/layout/FormLayout.scss";
import "../../styles/components/LanguageForm.scss";
import TextField from "../../ui/TextField";
import LanguageLevelBox from "./LanguageLevelBox";
import { FaBookReader } from "react-icons/fa";
import { FaPeopleArrows } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa6";
import { FaTrophy } from "react-icons/fa6";
import { useState } from "react";

/* eslint-disable react/prop-types */
function LanguageForm({ onSubmit }) {
  const [languageLevel, setLanguageLevel] = useState(null);

  function handleLanguageLevelClick(text) {
    setLanguageLevel(text);
  }

  return (
    <form>
      <TextField name="language">Language</TextField>
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
      <TextField name="course">Course or certificate</TextField>
      <div className="btn__container">
        <button
          className="btn__container--save"
          type="submit"
          onClick={onSubmit}
        >
          Save
        </button>
      </div>
    </form>
  );
}

export default LanguageForm;
