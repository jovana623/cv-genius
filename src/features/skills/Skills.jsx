import "../../styles/components/Skills.scss";

function Skills() {
  return (
    <form className="form__skills">
      <input
        type="text"
        placeholder="Skills"
        className="form__skills--field"
      ></input>
      <button type="submit" className="form__skills--btn">
        Add
      </button>
    </form>
  );
}

export default Skills;
