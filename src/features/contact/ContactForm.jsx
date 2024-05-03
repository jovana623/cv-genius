import "../../styles/layout/FormLayout.scss";
import "../../styles/components/ContactForm.scss";
import "../../styles/layout/InputFieldLayout.scss";
import { useState } from "react";
import AdditionalFields from "./AdditionalFields";
import { useDispatch } from "react-redux";
import {
  changeAddress,
  changeEmail,
  changeFirstName,
  changeLastName,
  changeOccupation,
  changePhone,
} from "./contactSlice";
import InputField from "../../ui/InputField";

function ContactForm() {
  const [showAdditionalField, setShowAdditionalFields] = useState(false);

  const dispatch = useDispatch();

  function handleAdditionalFieldsToggle(e) {
    e.preventDefault();
    setShowAdditionalFields((isOpen) => !isOpen);
  }

  return (
    <form className="form__container">
      <h1 className="form__container--title">Give a brief self-introduction</h1>
      <p className="form__container--subtitle">
        Tell us a bit about yourself, how employers can contact you, and what
        you do for a living.
      </p>
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
        <div>Profile photo</div>
      </div>
      <InputField
        name="occupation"
        label="Occupation"
        onChange={(value) => dispatch(changeOccupation(value))}
      />
      <InputField
        name="email"
        label="Email"
        onChange={(value) => dispatch(changeEmail(value))}
      />

      <div className="form__container--two-rows">
        <InputField
          name="address"
          label="Address"
          onChange={(value) => dispatch(changeAddress(value))}
        />
        <InputField
          name="phone"
          label="Phone"
          onChange={(value) => dispatch(changePhone(value))}
        />
      </div>
      <button
        onClick={(e) => handleAdditionalFieldsToggle(e)}
        className="btn--add-fields"
      >
        {showAdditionalField
          ? "Hide additional fields \u2191"
          : "Open additional fields \u2193"}
      </button>
      {showAdditionalField && <AdditionalFields />}
    </form>
  );
}

export default ContactForm;
