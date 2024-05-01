import { useSelector } from "react-redux";
import "../../styles/components/LanguageInformations.scss";

function LanguageInformations() {
  const languageList = useSelector((state) => state.language);
  return (
    <div className="languages__container">
      <h3 className="languages__container--title">LANGUAGES</h3>
      <ul className="languages__container--list">
        {languageList.map((language) => (
          <li key={language.id} className="languages__container--list--item">
            {language.name} | {language.level} <br /> {language.certificate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageInformations;
