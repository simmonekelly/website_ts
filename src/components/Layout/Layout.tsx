import React, { PropsWithChildren } from "react";
import Header from "../Header/Header";
import styled from "styled-components";
import { Colors, Breakpoint } from "../../styles/styles";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <PageLayout className="layout">
      <Header />
      <MainContent className="main-content">{children}</MainContent>
    </PageLayout>
  );
};

const PageLayout = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: ${Breakpoint.tablet}px) {
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
  }
`;

const MainContent = styled.main<{ children: React.ReactNode }>`
  background-color: ${Colors.isabellene};
  padding: 0 20px;

  @media (min-width: ${Breakpoint.tablet}px) {
    width: 70%;
    height: auto;
    scroll-behavior: smooth;
    overflow: auto;
    padding: 20px 40px;
  }
`;

export default Layout;
