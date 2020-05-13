import React from 'react';

import * as S from './styles';
import PlusIcon from '../../svgs/plus-icon';

interface CardProps {}

const Card: React.FC<CardProps> = () => {
  return (
    <S.Card>
      <S.CardContainer>
        <S.Rank>1위</S.Rank>
        <S.InformationContainer>
          <S.Thumbnail src="https://img.sta1.com/_up/store/2020/04/03/1585884760828.jpg"></S.Thumbnail>
          <S.ShopName>히프나틱</S.ShopName>
          <S.Description>10대,20대</S.Description>
          <S.Description>러블리,섹시</S.Description>
        </S.InformationContainer>
        <S.ButtonContainer>
          <S.Button>전체상품</S.Button>
          <S.Button style={{ borderRight: 'none' }}>
            <S.DesktopButtonMessage>마이샵</S.DesktopButtonMessage>
            <PlusIcon />
          </S.Button>
        </S.ButtonContainer>
      </S.CardContainer>
    </S.Card>
  );
};

export default Card;
