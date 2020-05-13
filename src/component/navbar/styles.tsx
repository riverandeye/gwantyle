import styled from 'styled-components/macro';

import { BREAKPOINT } from '../../constant';

export const NavBar = styled.div`
  position: fixed;
`;

export const NavBarContainer = styled.div`
  width: 100%;
  height: 7rem;
  margin-top: 10rem;
  background-color: 'green';

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 16rem;
    margin-top: 6rem;
  }
`;
