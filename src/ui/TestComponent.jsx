import { useDispatch } from "react-redux";
import "../styles/components/TestComponent.scss";
import TestField from "./InputField";
import { changeFirstName } from "../features/contact/contactSlice";

function TestComponent() {
  const dispatch = useDispatch();
  return (
    <div className="container">
      <form>
        <div className="row">
          <div className="col-sm">
            <TestField
              name="firstName"
              label="First Name"
              onChange={(value) => dispatch(changeFirstName(value))}
            />
          </div>
          <div className="col-sm">
            <TestField name="lastName" label="Last Name" />
          </div>
        </div>
        <div className="row">
          <div className="col-sm">
            <TestField name="email" label="Email" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default TestComponent;
