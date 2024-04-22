import "../styles/components/ProgressHeader.scss";

function ProgressHeader() {
  return (
    <div className="progress">
      <div className="progress__logo-steps">
        <img src="/logo-cv-genius.png" alt="logo" className="progress__logo" />
        <div className="progress__steps">
          <p>Step 1 of 5</p>
          <h2>Contact informations</h2>
        </div>
      </div>
      <progress max="5" value="2" className="progress__tag"></progress>
    </div>
  );
}

export default ProgressHeader;
