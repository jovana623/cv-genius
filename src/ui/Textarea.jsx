import useFormField from "../hooks/useFormField";
import "../styles/components/InputField.scss";

/* eslint-disable react/prop-types */
function Textarea({ name, label, onChange, register }) {
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
        <textarea
          id={name}
          className="form-field__textarea"
          onChange={handleChange}
          {...(register && register(name))}
        ></textarea>
      </div>
    </div>
  );
}

export default Textarea;
