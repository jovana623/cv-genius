import "../../styles/components/LanguagesTab.scss";
import { CiTrash } from "react-icons/ci";
import { LuPencilLine } from "react-icons/lu";
import { useDispatch } from "react-redux";
import { deleteLanguage } from "./languageSlice";
import Modal from "../../ui/Modal";
import DeleteWindow from "../../ui/DeleteWindow";

/* eslint-disable react/prop-types */
function LanguagesTab({ language }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteLanguage(language.id));
  }

  return (
    <div className="tab">
      <div className="tab__info">
        <h3 className="tab__info--title">{language.name}</h3>
        <div className="tab__info--details">
          <p className="tab__info--details-subtitle">{language.level}</p>{" "}
          &#8210;<span>{language.certificate}</span>
        </div>
      </div>
      <div className="tab__menu">
        <button className="tab__menu--btn">
          <LuPencilLine className="tab__menu--pencil" />
        </button>

        <Modal>
          <Modal.Open opens="delete-language">
            <button className="tab__menu--btn">
              <CiTrash className="tab__menu--trash" />
            </button>
            <Modal.Window name="delete-language">
              <DeleteWindow onConfirm={handleDelete} />
            </Modal.Window>
          </Modal.Open>
        </Modal>
      </div>
    </div>
  );
}

export default LanguagesTab;
