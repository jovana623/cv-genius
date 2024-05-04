import { Outlet } from "react-router-dom";
import Navigation from "../features/navigation/Navigation";

function Forms() {
  return (
    <>
      <Outlet />
      <Navigation />
    </>
  );
}

export default Forms;
