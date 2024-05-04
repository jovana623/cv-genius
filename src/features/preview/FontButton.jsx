import "../../styles/layout/BarButton.scss";
import { RiFontSize } from "react-icons/ri";

function FontButton() {
  return (
    <button className="font-btn">
      <RiFontSize />
      <select className="font-btn__select">
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
        <option value={3}>Option 3</option>
        <option value={4}>Option 4</option>
      </select>
    </button>
  );
}

export default FontButton;
