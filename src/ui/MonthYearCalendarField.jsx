import "../styles/components/TextField.scss";

/* eslint-disable react/prop-types */
function MonthYearCalendarField({ name }) {
  return <input type="month" className="field__text" name={name} id={name} />;
}

export default MonthYearCalendarField;
