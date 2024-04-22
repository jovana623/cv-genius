import "../../styles/components/Resume.scss";

function Resume() {
  return (
    <div className="resume">
      <div>ProfileInfo</div>
      <div className="resume__main-info">
        <div className="resume__side--left">
          <p>Contact</p>
          <p>Skill</p>
          <p>Languages</p>
        </div>
        <div className="resume__side--right">
          <p>Objective</p>
          <p>Experence</p>
          <p>Education</p>
        </div>
      </div>
    </div>
  );
}

export default Resume;
