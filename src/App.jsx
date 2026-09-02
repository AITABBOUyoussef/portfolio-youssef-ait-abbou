import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./sections/Hero.jsx";
import About from "./sections/About.jsx";
import Skills from "./sections/Skills.jsx";
import Projects from "./sections/Projects.jsx";
import CV from "./sections/CV.jsx";
import Contact from "./sections/Contact.jsx";
import ProjectDetail from "./pages/ProjectDetail.jsx";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <CV />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets/:id" element={<ProjectDetail />} />
      </Routes>
    </>
  );
}

export default App;
