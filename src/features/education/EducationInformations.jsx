import { useSelector } from "react-redux";
import "../../styles/components/EducationInformations.scss";
import InformationPattern from "../../ui/InformationPattern";

function EducationInformations() {
  const educationList = useSelector((state) => state.education);
  return (
    <div className="education__container">
      <h3 className="education__container--title">EDUCATION</h3>
      <div>
        {educationList.map((item, index) => (
          <InformationPattern key={index} listItem={item} />
        ))}
      </div>
    </div>
  );
}

export default EducationInformations;
