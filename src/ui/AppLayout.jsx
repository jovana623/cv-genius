import ProgressHeader from "./ProgressHeader";
import ResumeTemplate from "../features/template/ResumeTemplate";
import "../styles/pages/AppLayout.scss";

function AppLayout() {
  return (
    <>
      <ProgressHeader />
      <div className="main--layout">
        <div>Outlet</div>
        <ResumeTemplate />
      </div>
    </>
  );
}

export default AppLayout;
