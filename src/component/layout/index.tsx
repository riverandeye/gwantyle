import * as S from "./styles";

import React from "react";

interface LayoutProps {
  children?: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <S.Layout>
      <S.LayoutContainer>{children}</S.LayoutContainer>
    </S.Layout>
  );
};

export default Layout;
