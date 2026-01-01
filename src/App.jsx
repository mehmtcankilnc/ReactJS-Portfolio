import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import PublishedApps from "./screens/PublishedApps";
import Contact from "./screens/Contact";
import MobileProjects from "./screens/MobileProjects";
import BackendProjects from "./screens/BackendProjects";
import UnityProjects from "./screens/UnityProjects";
import { Analytics } from "@vercel/analytics/react";

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
                <PublishedApps id="published" />
                <Projects id="projects" />
                <About id="about" />
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
