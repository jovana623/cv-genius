import "../../styles/components/LanguageInformations.scss";

function LanguageInformations() {
  const languageList = [
    { name: "English", level: "Native", certificate: "No" },
    {
      name: "French",
      level: "Intermediate",
      certificate: "Oxford certificate",
    },
  ];
  return (
    <div className="languages__container">
      <h3 className="languages__container--title">LANGUAGES</h3>
      <ul className="languages__container--list">
        {languageList.map((language, index) => (
          <li key={index} className="languages__container--list--item">
            {language.name} | {language.level} <br /> {language.certificate}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LanguageInformations;
