import "../styles/components/ExpEduFormPattern.scss";
import "../styles/layout/FormLayout.scss";
import TextField from "./TextField";
import MonthYearCalendarField from "./MonthYearCalendarField";

/* eslint-disable react/prop-types */
function ExpEduFormPattern({ fieldNames, onSuccess }) {
  return (
    <form onSubmit={onSuccess}>
      <div className="form__container--two-rows">
        <TextField name="title">{fieldNames[0]}</TextField>
        <TextField name="subtitle">{fieldNames[1]}</TextField>
      </div>
      <TextField name="location">{fieldNames[2]}</TextField>
      <div className="form__container--two-rows">
        <MonthYearCalendarField name="startDate" />
        <MonthYearCalendarField name="endDate" />
      </div>
      <TextField name="description">{fieldNames[3]}</TextField>
      <div className="btn__submit--container">
        <button type="submit" className="btn__submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default ExpEduFormPattern;
