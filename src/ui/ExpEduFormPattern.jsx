import "../styles/components/ExpEduFormPattern.scss";
import "../styles/layout/FormLayout.scss";
import "../styles/components/TextField.scss";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";
import InputField from "../ui/InputField";
import Textarea from "./Textarea";

/* eslint-disable react/prop-types */
function ExpEduFormPattern({ fieldNames, onSuccess }) {
  const { register, handleSubmit } = useForm();

  function onSubmit(data) {
    const newData = { id: uuidv4(), ...data };
    onSuccess(newData);
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
            {...register("endDate")}
          />
          <input type="checkbox" id="present" />
          <label htmlFor="present">Present</label>
        </div>
      </div>
      <Textarea name="description" label={fieldNames[3]} register={register} />

      <div className="btn__submit--container">
        <button type="submit" className="btn__submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default ExpEduFormPattern;
