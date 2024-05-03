import "../styles/components/ProgressHeader.scss";

function TestComponent() {
  return (
    <ol className="progress">
      <li data-step="1" className="is-complete">
        Contact
      </li>
      <li data-step="2" className="is-complete">
        Experience
      </li>
      <li data-step="3" className="is-complete">
        Education
      </li>
      <li data-step="4" className="is-active">
        Skills & languages
      </li>
      <li data-step="5" className="progress__last">
        Objective
      </li>
    </ol>
  );
}

export default TestComponent;
