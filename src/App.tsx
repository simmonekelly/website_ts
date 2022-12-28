import React from "react";
import "./App.css";
import ProjectPage from "./pages/projects/Page";
import SkillsPage from "./pages/skills/Page";
import Layout from "./components/Layout/Layout";
import AboutPage from "./pages/about/Page";
import "./styles/global.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <AboutPage />
        <SkillsPage />
        <ProjectPage />
      </Layout>
    </div>
  );
}

export default App;
