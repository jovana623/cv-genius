import "../../styles/layout/FormLayout.scss";
import "../../styles/components/ContactForm.scss";
import TextField from "../../ui/TextField";
import { useState } from "react";
import AdditionalFields from "./AdditionalFields";

function ContactForm() {
  const [showAdditionalField, setShowAdditionalFields] = useState(false);

  function handleAdditionalFieldsToggle(e) {
    e.preventDefault();
    setShowAdditionalFields((isOpen) => !isOpen);
  }

  return (
    <form className="form__container">
      <h1 className="form__container--title">Tell us about yourself</h1>
      <p className="form__container--subtitle">
        Let us know who you are, how employers can get in touch with you, and
        what your profession is.
      </p>
      <div className="details">
        <div className="details__name">
          <TextField name="firstName">First Name</TextField>
          <TextField name="lastName">Last Name</TextField>
        </div>
        <div>Profile photo</div>
      </div>
      <TextField name="occupation">Occupation</TextField>
      <TextField name="email">Email</TextField>
      <div className="form__container--two-rows">
        <TextField name="address">Address</TextField>
        <TextField name="phone">Phone</TextField>
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
