import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import "./styles/base/base.scss";
import ContactForm from "./features/contact/ContactForm";
import ExperenceForm from "./features/experence/ExperenceForm";
import EducationForm from "./features/education/EducationForm";
import SkillsLanguageForm from "./features/skills/SkillsLanguageForm";
import ObjectiveForm from "./features/objective/ObjectiveForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<AppLayout />}>
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/experence" element={<ExperenceForm />} />
          <Route path="/education" element={<EducationForm />} />
          <Route path="/skills&languages" element={<SkillsLanguageForm />} />
          <Route path="/objective" element={<ObjectiveForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
