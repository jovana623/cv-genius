import { useForm } from "react-hook-form";
import "../../styles/components/Skills.scss";
import { useDispatch } from "react-redux";
import { addSkill } from "./skillsSlice";
import { v4 as uuidv4 } from "uuid";

function Skills() {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  function onSubmit(data) {
    const newSkill = { id: uuidv4(), ...data };
    dispatch(addSkill(newSkill));
    reset();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="form__skills">
      <input
        type="text"
        placeholder="Skills"
        className="form__skills--field"
        {...register("name")}
      ></input>
      <button type="submit" className="form__skills--btn">
        Add
      </button>
    </form>
  );
}

export default Skills;
