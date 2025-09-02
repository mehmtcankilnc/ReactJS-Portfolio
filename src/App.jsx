import Layout from "./components/Layout";
import Home from "./screens/Home";
import About from "./screens/About";
import Projects from "./screens/Projects";
import Contact from "./screens/Contact";

export default function App() {
  return (
    <Layout>
      <Home id="home" />
      <About id="about" />
      <Projects id="projects" />
      <Contact id="contact" />
    </Layout>
  );
}
