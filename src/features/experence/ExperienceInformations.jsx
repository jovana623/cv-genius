import { useSelector } from "react-redux";
import "../../styles/components/ExperenceInformations.scss";
import InformationPattern from "../../ui/InformationPattern";

/* eslint-disable react/prop-types */
function ExperenceInformations() {
  const experienceList = useSelector((state) => state.experience);
  return (
    <div className="experence__container">
      <h3 className="experence__container--title">EXPERENCE</h3>
      <div>
        {experienceList.map((item, index) => (
          <InformationPattern key={index} listItem={item} />
        ))}
      </div>
    </div>
  );
}

export default ExperenceInformations;
