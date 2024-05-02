import { useDispatch } from "react-redux";
import "../../styles/layout/FormLayout.scss";
import CalendarField from "../../ui/CalendarField";
import {
  changeBirthDate,
  changeLinkedIn,
  changeNationality,
} from "./contactSlice";
import InputField from "../../ui/InputField";

function AdditionalFields() {
  const dispatch = useDispatch();
  return (
    <>
      <div className="form__container--two-rows">
        <InputField
          name="nationality"
          label="Nationality"
          onChange={(value) => dispatch(changeNationality(value))}
        />

        <CalendarField
          name="birthday"
          onChange={(value) => dispatch(changeBirthDate(value))}
        >
          Birthday
        </CalendarField>
      </div>
      <InputField
        name="linkedin"
        label="LinkedIn"
        onChange={(value) => dispatch(changeLinkedIn(value))}
      />
    </>
  );
}

export default AdditionalFields;
