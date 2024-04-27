import { Outlet } from "react-router-dom";
import "../styles/components/Forms.scss";
import Navigation from "./Navigation";

function Forms() {
  return (
    <>
      <Outlet />
      <Navigation />
    </>
  );
}

export default Forms;