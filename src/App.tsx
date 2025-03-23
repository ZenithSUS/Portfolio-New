import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/main-layout";
import About from "./pages/about";
import Projects from "./pages/projects";
import Skills from "./pages/skills";
import Contact from "./pages/contact";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>404</h1>} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
