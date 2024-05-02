import useFormField from "../hooks/useFormField";
import "../styles/components/InputField.scss";

/* eslint-disable react/prop-types */
function InputField({ name, label, onChange }) {
  useFormField();

  function handleChange(e) {
    onChange(e.target.value);
  }
  return (
    <div className="form-field">
      <div className="form-field__control">
        <label htmlFor={name} className="form-field__label">
          {label}
        </label>
        <input
          id={name}
          type="text"
          className="form-field__input"
          onChange={handleChange}
        />
      </div>
    </div>
  );
}

export default InputField;
