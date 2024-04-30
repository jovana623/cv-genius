import "../styles/components/ExpEduFormPattern.scss";
import "../styles/layout/FormLayout.scss";
import "../styles/components/TextField.scss";
import { useForm } from "react-hook-form";
import { v4 as uuidv4 } from "uuid";

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
        <input
          type="text"
          className="field__text"
          placeholder={fieldNames[0]}
          {...register("title")}
        />
        <input
          type="text"
          className="field__text"
          placeholder={fieldNames[1]}
          {...register("subtitle")}
        />
      </div>
      <input
        type="text"
        className="field__text"
        placeholder={fieldNames[2]}
        {...register("location")}
      />

      <div className="form__container--two-rows">
        <input
          type="month"
          className="field__text"
          {...register("startDate")}
        />
        <input type="month" className="field__text" {...register("endDate")} />
      </div>
      <input
        type="text"
        className="field__text"
        placeholder={fieldNames[3]}
        {...register("description")}
      />

      <div className="btn__submit--container">
        <button type="submit" className="btn__submit">
          Save
        </button>
      </div>
    </form>
  );
}

export default ExpEduFormPattern;
