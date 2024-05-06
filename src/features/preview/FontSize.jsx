import { useDispatch } from "react-redux";
import "../../styles/layout/BarButton.scss";
import { RxFontSize } from "react-icons/rx";
import { changeFontSize } from "./fontSlice";

function FontSize() {
  const dispatch = useDispatch();
  return (
    <button className="font-btn">
      <RxFontSize />
      <select
        className="font-btn__select"
        onChange={(e) => dispatch(changeFontSize(e.target.value))}
      >
        <option value={12}>XS</option>
        <option value={14}>S</option>
        <option value={16}>M</option>
        <option value={18}>L</option>
        <option value={20}>XL</option>
      </select>
    </button>
  );
}

export default FontSize;
