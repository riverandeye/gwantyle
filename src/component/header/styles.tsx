import styled from 'styled-components/macro';

import { BREAKPOINT, THEME } from '../../constant';

export const Header = styled.div`
  position: fixed;
  width: 100%;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${THEME.MOBILE_HEADER};
  height: 5.5rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    background-color: ${THEME.DESKTOP_HEADER};
    height: 6rem;
  }
`;

export const MobileContainer = styled.div`
  width: 100%;
  padding-right: 1.6rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const DesktopContainer = styled.div`
  display: none;
  align-items: center;
  justify-content: space-between;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: flex;
  }
`;

export const Logo = styled.img`
  width: 5.5rem;
  height: auto;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 6rem;
    height: auto;
  }
`;

export const MobileTopButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const MobileCategoriesContainer = styled.div``;

export const MobileSearchBar = styled.div`
  display: flex;
  align-items: center;

  width: 10rem;
  height: 3rem;
  margin-left: 1.2rem;

  background-color: white;
  border-radius: 1.5rem;

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.15);
  cursor: pointer;
`;

export const MobileGenderToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 3rem;

  background-color: ${THEME.MOBILE_HEADER};
  border: 1px solid white;
  border-radius: 1.5rem;
`;

interface CategoryButtonContainer {
  active?: boolean;
}

export const MobileGenderButton = styled.div<CategoryButtonContainer>`
  z-index: ${(props) => (props.active ? 100 : 50)};

  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: ${(props) => (props.active ? '0 1px 3px rgba(0, 0, 0, 0.4)' : 'none')};

  font-size: 1.1rem;
  font-weight: bolder;
  height: 2.8rem;
  padding: 0rem 0.8rem;
  border: none;
  border-radius: 1.5rem;

  background-color: ${(props) => (props.active ? 'white' : THEME.MOBILE_HEADER)};
  color: ${(props) => (props.active ? THEME.MOBILE_HEADER : 'white')};
`;

interface CategoryButtonContainer {
  active?: boolean;
}

export const SecondRowContainer = styled.div`
  width: 100%;
  display: flex;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const CategoryButton = styled.div<CategoryButtonContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 25%;
  height: 4.5rem;
  background-color: ${THEME.MOBILE_HEADER};

  font-size: 1.5rem;
  color: ${(props) => (props.active ? 'white' : '#FFB27A')};

  font-weight: ${(props) => (props.active ? 500 : 200)};
`;
