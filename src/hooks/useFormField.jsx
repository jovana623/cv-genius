import { useEffect } from "react";

function useFormField() {
  const setActive = (el, active) => {
    const formField = el.parentNode.parentNode;
    if (active) {
      formField.classList.add("form-field--is-active");
    } else {
      formField.classList.remove("form-field--is-active");
      el.value === ""
        ? formField.classList.remove("form-field--is-filled")
        : formField.classList.add("form-field--is-filled");
    }
  };

  useEffect(() => {
    const handleBlur = (el) => {
      setActive(el, false);
    };

    const handleFocus = (el) => {
      setActive(el, true);
    };

    const formElements = document.querySelectorAll(
      ".form-field__input, .form-field__textarea"
    );
    formElements.forEach((el) => {
      el.addEventListener("blur", () => handleBlur(el));
      el.addEventListener("focus", () => handleFocus(el));
    });

    return () => {
      formElements.forEach((el) => {
        el.removeEventListener("blur", () => handleBlur(el));
        el.removeEventListener("focus", () => handleFocus(el));
      });
    };
  }, []);
}

export default useFormField;
