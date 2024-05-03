import "../styles/layout/CalendarField.scss";

/* eslint-disable react/prop-types */
function CalendarField({ children, name, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }
  return (
    <input
      type="date"
      placeholder={children}
      id={name}
      className="field__text"
      onChange={handleChange}
    />
  );
}

export default CalendarField;
