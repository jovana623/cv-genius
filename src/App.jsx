import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppLayout from "./ui/AppLayout";
import "./styles/base/base.scss";
import ContactForm from "./features/contact/ContactForm";
import ExperienceForm from "./features/experence/ExperienceForm";
import EducationForm from "./features/education/EducationForm";
import SkillsLanguageForm from "./features/skills/SkillsLanguageForm";
import ObjectiveForm from "./features/objective/ObjectiveForm";
import Preview from "./pages/Preview";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/experience" element={<ExperienceForm />} />
          <Route path="/education" element={<EducationForm />} />
          <Route path="/skills&languages" element={<SkillsLanguageForm />} />
          <Route path="/objective" element={<ObjectiveForm />} />
        </Route>
        <Route path="/preview" element={<Preview />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
