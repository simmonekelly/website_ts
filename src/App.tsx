import { useEffect } from "react";
import "./App.scss";
import { ProjectsPage, SkillsPage, AboutPage } from "./pages";
import Layout from "./components/Layout/Layout";
import "./styles/global.css";

function App() {
  useEffect(() => {
    document.title = "Simmone Kelly";
  }, []);

  return (
    <div className="App">
      <Layout>
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
      </Layout>
    </div>
  );
}

export default App;
