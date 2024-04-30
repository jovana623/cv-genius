import "../styles/components/TextField.scss";
import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const TextField = forwardRef(({ children, name, onChange }, ref) => {
  function handleChange(e) {
    if (onChange) {
      onChange(e.target.value);
    }
  }
  return (
    <input
      type="text"
      id={name}
      name={name}
      placeholder={children}
      className="field__text"
      onChange={handleChange}
      ref={ref}
    />
  );
});

TextField.displayName = "TextField";
export default TextField;
