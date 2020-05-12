import styled from "styled-components/macro";

import { BREAKPOINT, THEME } from "../../constant";

export const Header = styled.div`
  position: fixed;
`;

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: ${THEME.MOBILE_HEADER};

  @media only screen and (min-width: ${BREAKPOINT}px) {
    background-color: ${THEME.DESKTOP_HEADER};
  }
`;

export const Logo = styled.img`
  width: 5rem;
  height: auto;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    width: 6rem;
    height: auto;
  }
`;
