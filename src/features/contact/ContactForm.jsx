import "../../styles/layout/FormLayout.scss";
import "../../styles/components/ContactForm.scss";
import "../../styles/layout/InputFieldLayout.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  changeBirthDate,
  changeEmail,
  changeFirstName,
  changeGithub,
  changeLastName,
  changeLinkedIn,
  changeOccupation,
  changePersonalSite,
  changePhone,
} from "./contactSlice";
import InputField from "../../ui/InputField";
import AddFieldsBtn from "./AddFieldBtn";
import CalendarField from "../../ui/CalendarField";
import { CiTrash } from "react-icons/ci";
import Photo from "./Photo";

function ContactForm() {
  const [showGithubField, setShowGithubField] = useState(false);
  const [showbirthDateField, setShowBirthDateField] = useState(false);
  const [showSiteField, setShowSiteField] = useState(false);

  const dispatch = useDispatch();

  return (
    <form className="form__container">
      <h1 className="form__container--title">Give a brief self-introduction</h1>
      <div className="details">
        <div className="details__name">
          <InputField
            name="firstName"
            label="First Name"
            onChange={(value) => dispatch(changeFirstName(value))}
          />
          <InputField
            name="lastName"
            label="Last Name"
            onChange={(value) => dispatch(changeLastName(value))}
          />
        </div>
        <Photo />
      </div>
      <InputField
        name="occupation"
        label="Professional title"
        onChange={(value) => dispatch(changeOccupation(value))}
      />

      <div className="form__container--two-rows">
        <InputField
          name="email"
          label="Email"
          onChange={(value) => dispatch(changeEmail(value))}
        />
        <InputField
          name="phone"
          label="Phone"
          onChange={(value) => dispatch(changePhone(value))}
        />
      </div>
      <InputField
        name="linkedin"
        label="LinkedIn"
        onChange={(value) => dispatch(changeLinkedIn(value))}
      />
      <div className="form__container--two-rows">
        {showGithubField && (
          <div className="additional-input">
            <InputField
              name="github"
              label="Github"
              onChange={(value) => dispatch(changeGithub(value))}
            />
            <button
              className="additional-input__btn"
              onClick={() => setShowGithubField(false)}
            >
              <CiTrash />
            </button>
          </div>
        )}
        {showbirthDateField && (
          <div className="additional-input">
            <CalendarField
              name="birthday"
              onChange={(value) => dispatch(changeBirthDate(value))}
            >
              Birthday
            </CalendarField>
            <button
              className="additional-input__btn"
              onClick={() => setShowBirthDateField(false)}
            >
              <CiTrash />
            </button>
          </div>
        )}
      </div>
      <div>
        <div className="form__container--two-rows">
          {showSiteField && (
            <div className="additional-input">
              <InputField
                name="personalSite"
                label="Personal Site"
                onChange={(value) => dispatch(changePersonalSite(value))}
              />
              <button
                className="additional-input__btn"
                onClick={() => setShowSiteField(false)}
              >
                <CiTrash />
              </button>
            </div>
          )}
        </div>
      </div>
      <div className="additional_fields">
        {!showGithubField && (
          <AddFieldsBtn
            text="Github"
            onClick={() => setShowGithubField(true)}
          />
        )}
        {!showbirthDateField && (
          <AddFieldsBtn
            text="Birth date"
            onClick={() => setShowBirthDateField(true)}
          />
        )}
        {!showSiteField && (
          <AddFieldsBtn text="Website" onClick={() => setShowSiteField(true)} />
        )}
      </div>
    </form>
  );
}

export default ContactForm;
