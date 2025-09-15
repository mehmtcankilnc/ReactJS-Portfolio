import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";
import MobileProjects from "./screens/MobileProjects";
import BackendProjects from "./screens/BackendProjects";
import UnityProjects from "./screens/UnityProjects";
import { Analytics } from "@vercel/analytics/next";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <>
                <Home id="home" />
                <About id="about" />
                <Projects id="projects" />
                <Contact id="contact" />
              </>
            }
          />
          <Route path="mobile" element={<MobileProjects />} />
          <Route path="backend" element={<BackendProjects />} />
          <Route path="unity" element={<UnityProjects />} />
        </Route>
      </Routes>
      <Analytics />
    </Router>
  );
}
