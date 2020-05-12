import * as S from "./styles";

import React from "react";
import Header from "../header";
import NavBar from "../navbar";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Layout>
      <Header />
      <NavBar />
      <S.LayoutContainer>{children}</S.LayoutContainer>
    </S.Layout>
  );
};

export default Layout;
