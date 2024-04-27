import "../../styles/layout/FormLayout.scss";
import TextField from "../../ui/TextField";

function ObjectiveForm() {
  return (
    <div className="form__container">
      <h1 className="form__container--title">
        Now, let work on your resume objective
      </h1>
      <p className="form__container--subtitle">
        This appears near the top of your resume. Impress employers with a
        strong opening statement that sums up your strengths and experience.
      </p>
      <TextField name="objective">Objective</TextField>
    </div>
  );
}

export default ObjectiveForm;
