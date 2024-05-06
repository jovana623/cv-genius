import { useDispatch } from "react-redux";
import "../../styles/layout/BarButton.scss";
import { CiLineHeight } from "react-icons/ci";
import { changeLineHeight } from "./fontSlice";

function LineHeight() {
  const dispatch = useDispatch();

  return (
    <button className="font-btn">
      <CiLineHeight />
      <select
        className="font-btn__select"
        onChange={(e) => dispatch(changeLineHeight(e.target.value))}
      >
        <option value={1}>1</option>
        <option value={1.15}>1.15</option>
        <option value={1.25}>1.25</option>
        <option value={1.5}>1.5</option>
        <option value={2}>2</option>
      </select>
    </button>
  );
}

export default LineHeight;
