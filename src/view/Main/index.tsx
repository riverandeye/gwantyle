import React, { useState } from 'react';

import * as S from './styles';
import ArrowDown from '../../svgs/arrow-down';
import FilterIcon from '../../svgs/filter-icon';

interface MainProps {}

const Main: React.FC<MainProps> = ({}) => {
  const [category, setCategory] = useState(true);
  const toggleCategory = () => {
    setCategory(!category);
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
          <S.FilterColumnContainer>
            <S.StyleCategoryButton>
              <ArrowDown />
              <S.StyleCategoryButtonText>전체 (992)</S.StyleCategoryButtonText>
            </S.StyleCategoryButton>
            <S.FilterButton>
              <FilterIcon />
              <S.FilterButtonText>필터</S.FilterButtonText>
            </S.FilterButton>
          </S.FilterColumnContainer>
        </S.FilterContainer>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
        <div>ㅇㄴ</div>
      </S.MainContainer>
    </S.Main>
  );
};

export default Main;
