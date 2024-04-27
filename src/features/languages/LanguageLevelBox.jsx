import "../../styles/components/LanguageLevelBox.scss";

/* eslint-disable react/prop-types */
function LanguageLevelBox({ icon, text, onClick, isActive }) {
  return (
    <div
      className={`language__box ${isActive ? "language__box--active" : ""}`}
      onClick={() => onClick(text)}
    >
      <div className="language__box--icon">{icon}</div>
      <p className="language__box--text">{text}</p>
    </div>
  );
}

export default LanguageLevelBox;
