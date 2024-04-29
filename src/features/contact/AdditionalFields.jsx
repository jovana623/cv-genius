import { useDispatch } from "react-redux";
import "../../styles/layout/FormLayout.scss";
import CalendarField from "../../ui/CalendarField";
import TextField from "../../ui/TextField";
import {
  changeBirthDate,
  changeLinkedIn,
  changeNationality,
} from "./contactSlice";

function AdditionalFields() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="form__container--two-rows">
        <TextField
          name="nationality"
          onChange={(value) => dispatch(changeNationality(value))}
        >
          Nationality
        </TextField>
        <CalendarField
          name="birthday"
          onChange={(value) => dispatch(changeBirthDate(value))}
        >
          Birthday
        </CalendarField>
      </div>
      <TextField
        name="linkedin"
        onChange={(value) => dispatch(changeLinkedIn(value))}
      >
        Linkedin
      </TextField>
    </>
  );
}

export default AdditionalFields;
