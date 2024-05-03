import { cloneElement, createContext, useContext, useState } from "react";
import "../styles/components/Modal.scss";
import { createPortal } from "react-dom";
import { IoCloseSharp } from "react-icons/io5";
import useOutsideClick from "../hooks/useOutsideClick";

export const ModalContext = createContext();

/* eslint-disable react/prop-types */
function Modal({ children }) {
  const [openModal, setOpenModal] = useState("");
  const close = () => setOpenModal("");
  const open = (modal) => setOpenModal(modal);

  return (
    <ModalContext.Provider value={{ openModal, close, open }}>
      {children}
    </ModalContext.Provider>
  );
}

function Open({ children, opens }) {
  const { open } = useContext(ModalContext);

  return <div onClick={() => open(opens)}>{children}</div>;
}

function Window({ children, name }) {
  const { openModal, close } = useContext(ModalContext);

  const ref = useOutsideClick(close);

  if (name !== openModal) return null;

  return createPortal(
    <div className="overlay">
      <div className="modal" ref={ref}>
        <button className="modal__btn" onClick={close}>
          <IoCloseSharp />
        </button>
        <div>{cloneElement(children, { onCloseModal: close })}</div>
      </div>
    </div>,
    document.body
  );
}

Modal.Open = Open;
Modal.Window = Window;
export default Modal;
