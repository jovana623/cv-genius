import "../styles/components/ExpEduFormPattern.scss";
import "../styles/layout/FormLayout.scss";
import "../styles/layout/CalendarField.scss";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import InputField from "../ui/InputField";
import Textarea from "./Textarea";
import { useState } from "react";
import { CiTrash } from "react-icons/ci";
import { IoMdCheckmark } from "react-icons/io";

/* eslint-disable react/prop-types */
function ExpEduFormPattern({ fieldNames, onSuccess, onCancel }) {
  const { register, handleSubmit } = useForm();
  const [checkPresent, setCheckPresent] = useState(false);

  function onSubmit(data) {
    let newData = { id: uuidv4(), ...data };
    if (checkPresent) {
      newData.endDate = "present";
    }
    onSuccess(newData);
    console.log(newData);
  }

  function handleCheck() {
    setCheckPresent((check) => !check);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="form__container--two-rows">
        <InputField name="title" label={fieldNames[0]} register={register} />
        <InputField name="subtitle" label={fieldNames[1]} register={register} />
      </div>
      <InputField name="location" label={fieldNames[2]} register={register} />

      <div className="form__container--two-rows">
        <input
          type="month"
          className="field__text"
          {...register("startDate")}
        />
        <div className="end-date">
          <input
            type="month"
            className="field__text"
            disabled={checkPresent}
            {...register("endDate")}
          />
          <div className="present-date">
            <input
              type="checkbox"
              id="present"
              onChange={handleCheck}
              className="present-checkbox"
            />
            <label htmlFor="present">Present</label>
          </div>
        </div>
      </div>
      <Textarea name="description" label={fieldNames[3]} register={register} />

      <div className="btn-container">
        <button
          type="cancel"
          className="btn-container__cancel"
          onClick={onCancel}
        >
          <CiTrash />
        </button>
        <button type="submit" className="btn-container__submit">
          <IoMdCheckmark />
          <span>Done</span>
        </button>
      </div>
    </form>
  );
}

export default ExpEduFormPattern;
