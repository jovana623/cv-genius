import "../../styles/layout/FormLayout.scss";
import "../../styles/components/ContactForm.scss";
import TextField from "../../ui/TextField";
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

function ContactForm() {
  const [showAdditionalField, setShowAdditionalFields] = useState(false);

  const dispatch = useDispatch();

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
          <TextField
            name="firstName"
            onChange={(value) => dispatch(changeFirstName(value))}
          >
            First Name
          </TextField>
          <TextField
            name="lastName"
            onChange={(value) => dispatch(changeLastName(value))}
          >
            Last Name
          </TextField>
        </div>
        <div>Profile photo</div>
      </div>
      <TextField
        name="occupation"
        onChange={(value) => dispatch(changeOccupation(value))}
      >
        Occupation
      </TextField>
      <TextField
        name="email"
        onChange={(value) => dispatch(changeEmail(value))}
      >
        Email
      </TextField>
      <div className="form__container--two-rows">
        <TextField
          name="address"
          onChange={(value) => dispatch(changeAddress(value))}
        >
          Address
        </TextField>
        <TextField
          name="phone"
          onChange={(value) => dispatch(changePhone(value))}
        >
          Phone
        </TextField>
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
