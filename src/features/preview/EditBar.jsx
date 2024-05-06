import { useNavigate } from "react-router-dom";
import "../../styles/components/EditBar.scss";
import { BiCollapse } from "react-icons/bi";
import FontButton from "./FontButton";
import FontSize from "./FontSize";
import LineHeight from "./LineHeight";
import DownloadButton from "./DownloadButton";

function EditBar() {
  const navigate = useNavigate();
  return (
    <div className="bar">
      <div>
        <DownloadButton />
      </div>
      <div className="bar__edit-btn">
        <FontButton />
        <FontSize />
        <LineHeight />
      </div>
      <div>
        <button className="bar__collapse" onClick={() => navigate(-1)}>
          <BiCollapse />
        </button>
      </div>
    </div>
  );
}

export default EditBar;
