import { useDispatch, useSelector } from "react-redux";
import "../../styles/components/Navigation.scss";
import { nextRoute, prevRoute } from "./navigationSlice";
import { NavLink } from "react-router-dom";
import {
  MdKeyboardDoubleArrowRight,
  MdKeyboardDoubleArrowLeft,
} from "react-icons/md";

function Navigation() {
  const dispatch = useDispatch();
  const { currentIndex, currentRoute } = useSelector(
    (state) => state.navigation
  );
  console.log(currentIndex, currentRoute);

  function handlePrevClick() {
    dispatch(prevRoute());
  }

  function handleNextClick() {
    dispatch(nextRoute());
  }

  return (
    <div className="nav">
      <NavLink to={currentRoute}>
        <button className="nav__btn" onClick={handlePrevClick}>
          <MdKeyboardDoubleArrowLeft />
          <span> Previous</span>
        </button>
      </NavLink>

      <NavLink to={currentRoute}>
        <button className="nav__btn" onClick={handleNextClick}>
          <span>Next</span> <MdKeyboardDoubleArrowRight />
        </button>
      </NavLink>
    </div>
  );
}

export default Navigation;
