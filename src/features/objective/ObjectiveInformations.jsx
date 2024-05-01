import { useSelector } from "react-redux";
import "../../styles/components/ObjectiveInformations.scss";

function ObjectiveInformations() {
  const { text } = useSelector((state) => state.objective);
  return (
    <div className="objective__container">
      <h3 className="objective__container--title">OBJECTIVE</h3>
      <p className="objective__container--text">{text}</p>
    </div>
  );
}

export default ObjectiveInformations;
