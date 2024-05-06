import { useDispatch } from "react-redux";
import "../../styles/layout/BarButton.scss";
import { RiFontSize } from "react-icons/ri";
import { changeFontFamily } from "./fontSlice";

function FontButton() {
  const dispatch = useDispatch();
  return (
    <button className="font-btn">
      <RiFontSize />
      <select
        className="font-btn__select"
        onChange={(e) => dispatch(changeFontFamily(e.target.value))}
      >
        <option value="Roboto">Roboto</option>
        <option value="Open Sans">Open Sans</option>
        <option value="Lato">Lato</option>
        <option value="Montserrat">Montserrat</option>
        <option value="Nunito">Nunito</option>
        <option value="Roboto Slab">Roboto Slab</option>
      </select>
    </button>
  );
}

export default FontButton;
