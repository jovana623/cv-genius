import "../../styles/layout/FormLayout.scss";
import CalendarField from "../../ui/CalendarField";
import TextField from "../../ui/TextField";

function AdditionalFields() {
  return (
    <>
      <div className="form__container--two-rows">
        <TextField name="nationality">Nationality</TextField>
        <CalendarField name="birthday">Birthday</CalendarField>
      </div>
      <TextField name="linkedin">Linkedin</TextField>
    </>
  );
}

export default AdditionalFields;
