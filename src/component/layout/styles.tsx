import styled from "styled-components/macro";
import { BREAKPOINT } from "../../constant";

export const Layout = styled.div``;

export const LayoutContainer = styled.div`
  padding-top: 16.5rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    padding-top: 22rem;
  }
`;
