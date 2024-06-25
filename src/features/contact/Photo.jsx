import "../../styles/components/Photo.scss";
import { FaPlusCircle } from "react-icons/fa";

function Photo() {
  return (
    <div className="photo_container">
      <button className="photo_container__btn">
        <FaPlusCircle />
      </button>
    </div>
  );
}

export default Photo;
