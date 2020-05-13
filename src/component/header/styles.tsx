import styled from 'styled-components/macro';

import { BREAKPOINT, THEME } from '../../constant';

interface ActiveProps {
  active?: boolean;
}

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
  background-color: ${THEME.THEME_ORANGE};
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
  width: 100%;

  display: none;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e5e5e5;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: flex;
  }
`;

export const Logo = styled.img`
  width: 5.5rem;
  height: auto;
  cursor: pointer;

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

  background-color: ${THEME.THEME_ORANGE};
  border: 1px solid white;
  border-radius: 1.5rem;
`;

export const MobileGenderButton = styled.div<ActiveProps>`
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

  background-color: ${(props) => (props.active ? 'white' : THEME.THEME_ORANGE)};
  color: ${(props) => (props.active ? THEME.THEME_ORANGE : 'white')};
`;

export const SecondRowContainer = styled.div`
  width: 100%;
  display: flex;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const MobileCategoryButton = styled.div<ActiveProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  width: 25%;
  height: 4.5rem;
  background-color: ${THEME.THEME_ORANGE};

  font-size: 1.5rem;
  color: ${(props) => (props.active ? 'white' : '#FFB27A')};

  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;

export const DesktopHeaderLeft = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const DesktopHeaderRight = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const DesktopCategoryContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DesktopGenderContainer = styled.div`
  display: flex;
  margin-left: 2.3rem;
`;

export const DesktopGenderButton = styled.div<ActiveProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  padding: 0rem 0.5rem;

  font-size: 1.2rem;
  cursor: pointer;

  color: ${(props) => (props.active ? 'black' : 'gray')};
  font-weight: bold;
`;

export const DesktopCategoryButton = styled.div<ActiveProps>`
  display: flex;
  justify-content: center;

  width: 5rem;
  line-height: 6rem;
  height: 6rem;
  font-size: 1.5rem;

  color: ${(props) => (props.active ? 'black' : 'gray')};
  font-weight: bold;

  margin: 0rem 2rem;
  cursor: pointer;

  /**이건 임시로.. 이렇게 하면 안됨 애니메이션 넣는게 맞음. */
  border-bottom: ${(props) => (props.active ? `3px solid ${THEME.THEME_ORANGE}` : '3px solid white')};
`;

export const LoginButton = styled.div`
  display: flex;
  align-items: center;

  width: 3.3rem;
  height: 6rem;

  font-size: 1.1rem;
  margin-right: 2rem;
`;

export const DesktopSearchBar = styled.div`
  width: 18rem;
  height: 6rem;
  padding: 0rem 1rem 0rem 1.4rem;

  display: flex;
  align-items: center;
  border-left: 1px solid #edeff0;
`;

export const DesktopSearchBarMessage = styled.div`
  margin-left: 0.7rem;
  font-size: 1.2rem;

  color: gray;
`;
