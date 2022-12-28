import React, { PropsWithChildren } from "react";
import Header from "../Header/Header";
import "./Layout.css";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="page-layout">
      <Header />
      <main className="main-content">{children}</main>
    </div>
  );
};

export default Layout;
