import { useEffect } from "react";
import "./App.scss";
import { ProjectsPage, SkillsPage, AboutPage } from "./pages";
import Layout from "./components/Layout/Layout";
import "./styles/global.css";
import styled from "styled-components";

function App() {
  useEffect(() => {
    document.title = "Simmone Kelly";
  }, []);

  return (
    <Wrapper>
      <Layout>
        <AboutPage />
        <SkillsPage />
        <ProjectsPage />
      </Layout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

export default App;
