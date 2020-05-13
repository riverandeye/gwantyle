import styled from 'styled-components/macro';
import { BREAKPOINT } from '../../constant';

export const Layout = styled.div`
  display: flex;
  width: 100%;
  min-height: 100%;
`;

export const LayoutContainer = styled.div`
  padding-top: 10rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    padding-top: 6rem;
  }
`;
