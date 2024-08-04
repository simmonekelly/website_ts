import { useEffect } from "react";
import "./App.scss";
import { ProjectsPage, AboutPage } from "./pages";
import Layout from "./components/Layout/Layout";
import "./styles/global.css";
import styled from "styled-components";
import ExperiencePage from "./pages/experience/Page";

function App() {
  useEffect(() => {
    document.title = "Simmone Kelly";
  }, []);

  return (
    <Wrapper>
      <Layout>
        <AboutPage />
        <ExperiencePage />
        <ProjectsPage />
      </Layout>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  text-align: center;
`;

export default App;
