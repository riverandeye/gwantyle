import React, { useState } from 'react';

import * as S from './styles';
import { SearchLens } from '../../svgs/search-lens';
import { CATEGORIES } from '../../constant';

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
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
            <S.MobileCategoryButton active={categoryState === idx} onClick={() => toggleCategory(idx)}>
              {val}
            </S.MobileCategoryButton>
          ))}
        </S.SecondRowContainer>
        <S.DesktopContainer>
          <S.DesktopHeaderLeft>
            <S.Logo src={process.env.PUBLIC_URL + '/logo.png'} />
            <S.DesktopGenderContainer>
              <S.DesktopGenderButton active={genderState} onClick={() => toggleButton(true)}>
                WOMEN
              </S.DesktopGenderButton>
              <S.DesktopGenderButton active={!genderState} onClick={() => toggleButton(false)}>
                MEN
              </S.DesktopGenderButton>
            </S.DesktopGenderContainer>
          </S.DesktopHeaderLeft>
          <S.DesktopCategoryContainer>
            {CATEGORIES.map((val, idx) => (
              <S.DesktopCategoryButton active={categoryState === idx} onClick={() => toggleCategory(idx)}>
                {val}
              </S.DesktopCategoryButton>
            ))}
          </S.DesktopCategoryContainer>
          <S.DesktopHeaderRight>
            <S.LoginButton>로그인</S.LoginButton>
            <S.DesktopSearchBar>
              <SearchLens />
              <S.DesktopSearchBarMessage>검색어를 입력하세요</S.DesktopSearchBarMessage>
            </S.DesktopSearchBar>
          </S.DesktopHeaderRight>
        </S.DesktopContainer>
      </S.HeaderContainer>
    </S.Header>
  );
};

export default Header;
