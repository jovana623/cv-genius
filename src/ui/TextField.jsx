import "../styles/components/TextField.scss";

/* eslint-disable react/prop-types */
function TextField({ children, name, onChange }) {
  function handleChange(e) {
    onChange(e.target.value);
  }
  return (
    <input
      type="text"
      id={name}
      name={name}
      placeholder={children}
      className="field__text"
      onChange={handleChange}
    />
  );
}

export default TextField;
