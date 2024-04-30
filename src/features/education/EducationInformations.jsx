import "../../styles/components/EducationInformations.scss";
import InformationPattern from "../../ui/InformationPattern";

function EducationInformations() {
  const list = [
    {
      title: "Computer Science Student",
      subtitle: "MIT",
      location: "Cambridge, Massachusetts, USA",
      startDate: "September 2017",
      endDate: "June 2020",
      description: " ",
    },
  ];
  return (
    <div className="education__container">
      <h3 className="education__container--title">{name.toUpperCase()}</h3>
      <div>
        {list.map((item, index) => (
          <InformationPattern key={index} listItem={item} />
        ))}
      </div>
    </div>
  );
}

export default EducationInformations;
