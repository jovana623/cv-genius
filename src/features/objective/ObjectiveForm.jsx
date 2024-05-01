import "../../styles/layout/FormLayout.scss";
import "../../styles/components/TextField.scss";
import { useDispatch } from "react-redux";
import { changeObjective } from "./objectiveSlice";

function ObjectiveForm() {
  const dispatch = useDispatch();

  return (
    <div className="form__container">
      <h1 className="form__container--title">
        Now, let work on your resume objective
      </h1>
      <p className="form__container--subtitle">
        This appears near the top of your resume. Impress employers with a
        strong opening statement that sums up your strengths and experience.
      </p>
      <input
        type="text"
        className="field__text"
        onChange={(e) => dispatch(changeObjective(e.target.value))}
      />
    </div>
  );
}

export default ObjectiveForm;
