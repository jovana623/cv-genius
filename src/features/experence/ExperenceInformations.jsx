import "../../styles/components/ExperenceInformations.scss";
import InformationPattern from "../../ui/InformationPattern";

/* eslint-disable react/prop-types */
function ExperenceInformations({ list, name, borderBottom }) {
  const inputBorder = {
    borderBottom: borderBottom ? borderBottom : "1px solid #a9a9a9",
  };

  return (
    <div className="experence__container" style={inputBorder}>
      <h3 className="experence__container--title">{name.toUpperCase()}</h3>
      <div>
        {list.map((item, index) => (
          <InformationPattern key={index} listItem={item} />
        ))}
      </div>
    </div>
  );
}

export default ExperenceInformations;
