import ProgressHeader from "./ProgressHeader";
import ResumeTemplate from "../features/template/ResumeTemplate";
import "../styles/pages/AppLayout.scss";
import Forms from "./Forms";

function AppLayout() {
  return (
    <>
      <ProgressHeader />
      <div className="main--layout">
        <Forms />
        <ResumeTemplate />
      </div>
    </>
  );
}

export default AppLayout;
