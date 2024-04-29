import { useSelector } from "react-redux";
import "../../styles/components/Profile.scss";

function Profile() {
  const { firstName, lastName, occupation } = useSelector(
    (store) => store.contact
  );

  return (
    <div className="header__info">
      <p className="header__info--firstname">{firstName}</p>
      <p className="header__info--lastname">{lastName}</p>
      <p className="header__info--occupation">{occupation}</p>
    </div>
  );
}

export default Profile;
