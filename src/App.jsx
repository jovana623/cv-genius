import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import "./styles/base/base.scss";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<AppLayout />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
