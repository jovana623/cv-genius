import "../../styles/layout/BarButton.scss";
import { RxFontSize } from "react-icons/rx";

function FontSize() {
  return (
    <button className="font-btn">
      <RxFontSize />
      <select className="font-btn__select">
        <option value={1}>Option 1</option>
        <option value={2}>Option 2</option>
        <option value={3}>Option 3</option>
        <option value={4}>Option 4</option>
      </select>
    </button>
  );
}

export default FontSize;
