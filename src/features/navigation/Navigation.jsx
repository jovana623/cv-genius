import { useDispatch, useSelector } from "react-redux";
import "../../styles/components/Navigation.scss";
import { nextRoute, prevRoute } from "./navigationSlice";
import { NavLink } from "react-router-dom";

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
        <button className="nav__btn--prev" onClick={handlePrevClick}>
          &#8592; Previous
        </button>
      </NavLink>

      <NavLink to={currentRoute}>
        <button className="nav__btn--next" onClick={handleNextClick}>
          Next &#8594;
        </button>
      </NavLink>
    </div>
  );
}

export default Navigation;
