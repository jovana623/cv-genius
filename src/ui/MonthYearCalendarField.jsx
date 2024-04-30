import { forwardRef } from "react";
import "../styles/components/TextField.scss";

/* eslint-disable react/prop-types */
const MonthYearCalendarField = forwardRef(({ name }, ref) => {
  return (
    <input
      type="month"
      className="field__text"
      name={name}
      id={name}
      ref={ref}
    />
  );
});

MonthYearCalendarField.displayName = "MonthYearCalendarField";
export default MonthYearCalendarField;
