import React from "react";

import * as S from "./styles";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <S.Header>
      <S.HeaderContainer>
        <S.Logo src={process.env.PUBLIC_URL + "/logo.png"} />
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
