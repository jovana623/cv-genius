import { useSelector } from "react-redux";
import "../styles/components/ProgressHeader.scss";

function ProgressHeader() {
  const { currentIndex } = useSelector((state) => state.navigation);
  return (
    <div className="progress">
      <div className="progress__logo-steps">
        <img src="/logo-cv-genius.png" alt="logo" className="progress__logo" />
        <div className="progress__steps">
          <p>Step {currentIndex} of 5</p>
          <h2>Contact informations</h2>
        </div>
      </div>
      <progress
        max="5"
        value={currentIndex}
        className="progress__tag"
      ></progress>
    </div>
  );
}

export default ProgressHeader;
