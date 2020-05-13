import React, { useState } from 'react';

import * as S from './styles';
import ArrowDown from '../../svgs/arrow-down';
import FilterIcon from '../../svgs/filter-icon';
import { SearchLens } from '../../svgs/search-lens';

interface MainProps {}

const Main: React.FC<MainProps> = () => {
  const [category, setCategory] = useState(true);
  const [shopName, setShopName] = useState('');

  const toggleCategory = () => {
    setCategory(!category);
  };

  const handleShopNameInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setShopName(e.target.value);
  };

  return (
    <S.Main>
      <S.MainContainer>
        <S.FilterContainer>
          <S.FilterColumnContainer>
            <S.FilterCategoryButton active={category} onClick={toggleCategory}>
              소호
            </S.FilterCategoryButton>
            <S.FilterCategoryButton active={!category} onClick={toggleCategory}>
              브랜드
            </S.FilterCategoryButton>
          </S.FilterColumnContainer>
          <S.MobileColumnContainer>
            <S.StyleCategoryButton>
              <ArrowDown />
              <S.StyleCategoryButtonText>전체 (992)</S.StyleCategoryButtonText>
            </S.StyleCategoryButton>
            <S.FilterButton>
              <FilterIcon />
              <S.FilterButtonText>필터</S.FilterButtonText>
            </S.FilterButton>
          </S.MobileColumnContainer>
          <S.DesktopColumnContainer>
            <S.DesktopCategoryButton></S.DesktopCategoryButton>
            <S.DesktopSearchBar>
              {!shopName && (
                <>
                  <SearchLens />
                  <S.SearchBarText>샵 이름으로 검색</S.SearchBarText>
                </>
              )}
              <input onChange={handleShopNameInput} />
            </S.DesktopSearchBar>
            <S.DesktopAgesContainer>
              <S.DesktopAgesButton>전체</S.DesktopAgesButton>
              <S.DesktopAgesButton>10대</S.DesktopAgesButton>
              <S.DesktopAgesButton>20대</S.DesktopAgesButton>
              <S.DesktopAgesButton>30대</S.DesktopAgesButton>
            </S.DesktopAgesContainer>
          </S.DesktopColumnContainer>
        </S.FilterContainer>
      </S.MainContainer>
    </S.Main>
  );
};

export default Main;
