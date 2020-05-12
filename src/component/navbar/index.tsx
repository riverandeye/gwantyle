import React from "react";

import * as S from "./styles";

interface NavBarProps {}

const NavBar: React.FC<NavBarProps> = ({}) => {
  return (
    <S.NavBar>
      <S.NavBarContainer>NavBar</S.NavBarContainer>
    </S.NavBar>
  );
};

export default NavBar;
