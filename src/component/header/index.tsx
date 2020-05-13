import React, { useState } from 'react';

import * as S from './styles';
import { SearchLens } from '../../svgs/search-lens';
import { CATEGORIES } from '../../constant';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const [genderState, setGenderState] = useState(true);
  const [categoryState, setCategoryState] = useState(0);

  const toggleButton = (genderState: boolean) => {
    setGenderState(genderState);
  };

  const toggleCategory = (state: number) => {
    setCategoryState(state);
  };

  return (
    <S.Header>
      <S.HeaderContainer>
        <S.MobileContainer>
          <S.Logo src={process.env.PUBLIC_URL + '/logo.png'} />
          <S.MobileTopButtonsContainer>
            <S.MobileGenderToggle>
              <S.MobileGenderButton active={genderState} onClick={() => toggleButton(true)}>
                WOMEN
              </S.MobileGenderButton>
              <S.MobileGenderButton active={!genderState} onClick={() => toggleButton(false)}>
                MEN
              </S.MobileGenderButton>
            </S.MobileGenderToggle>
            <S.MobileSearchBar>
              <SearchLens />
            </S.MobileSearchBar>
          </S.MobileTopButtonsContainer>
        </S.MobileContainer>
        <S.SecondRowContainer>
          {CATEGORIES.map((val, idx) => (
            <S.CategoryButton active={categoryState === idx} onClick={() => toggleCategory(idx)}>
              {val}
            </S.CategoryButton>
          ))}
        </S.SecondRowContainer>
        <S.DesktopContainer>
          <S.Logo src={process.env.PUBLIC_URL + '/logo.png'} />
        </S.DesktopContainer>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
