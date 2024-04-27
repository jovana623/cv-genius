import "../styles/components/TextField.scss";

/* eslint-disable react/prop-types */
function TextField({ children, name }) {
  return (
    <input
      type="text"
      id={name}
      name={name}
      placeholder={children}
      className="field__text"
    />
  );
}

export default TextField;
