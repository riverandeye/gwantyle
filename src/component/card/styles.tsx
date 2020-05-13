import styled from 'styled-components/macro';

import { BREAKPOINT, THEME } from '../../constant';

export const Card = styled.div`
  height: 19rem;
  background-color: white;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    flex-basis: none;
    width: 23rem;
    height: 30rem;
  }
`;

export const CardContainer = styled.div`
  position: relative;

  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Rank = styled.div`
  position: absolute;

  top: 1rem;
  left: 1rem;

  font-size: 1.2rem;
  color: ${THEME.THEME_ORANGE};
`;

export const InformationContainer = styled.div`
  display: flex;
  flex-direction: column;

  align-items: center;

  width: 100%;
  padding-top: 2.5rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    padding-top: 4.5rem;
  }
`;

export const Thumbnail = styled.img`
  width: 6.5rem;
  height: 6.5rem;

  border-radius: 50%;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 9rem;
    height: 9rem;
  }
`;

export const ShopName = styled.div`
  width: 100%;

  margin: 0rem 1.6rem;
  padding: 1.1rem 0rem 0.6rem;

  font-size: 1.3rem;
  font-weight: bold;

  text-align: center;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.5rem;
    padding: 1.9rem 0rem 1.5rem;
  }
`;

export const Description = styled.div`
  font-size: 1.1rem;

  color: #909090;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    font-size: 1.3rem;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  height: 3rem;

  justify-content: space-between;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 4rem;
  }
`;

export const Button = styled.button`
  width: 50%;
  border: none;
  border-top: 1px solid ${THEME.DARK_BORDER};
  border-right: 1px solid ${THEME.DARK_BORDER};

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 1.1rem;
  color: #909090;

  background-color: white;
`;

export const DesktopButtonMessage = styled.span`
  display: none;
  font-size: 1.1rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: inline;
    margin-right: 0.7rem;
  }
`;
