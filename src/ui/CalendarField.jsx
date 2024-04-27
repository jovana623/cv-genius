import "../styles/components/TextField.scss";

/* eslint-disable react/prop-types */
function CalendarField({ children, name }) {
  return (
    <input
      type="date"
      placeholder={children}
      id={name}
      className="field__text"
    />
  );
}

export default CalendarField;
