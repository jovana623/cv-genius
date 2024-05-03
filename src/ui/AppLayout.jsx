import ResumeTemplate from "../features/template/ResumeTemplate";
import "../styles/pages/AppLayout.scss";
import Forms from "./Forms";
import ProgressHeader from "../ui/ProgressHeader";

function AppLayout() {
  return (
    <div className="main__layout">
      <div className="main__layout--left">
        <ProgressHeader />
        <Forms />
      </div>
      <div className="main__layout--right">
        <ResumeTemplate />
      </div>
    </div>
  );
}

export default AppLayout;
