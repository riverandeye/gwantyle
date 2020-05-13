import styled from 'styled-components/macro';
import { THEME, BREAKPOINT } from '../../constant';

interface ActiveProps {
  active?: boolean;
}

export const Main = styled.div`
  display: flex;
  align-items: stretch;

  justify-content: center;
  min-width: 100%;
  height: 100%;
  background-color: ${THEME.MAIN_BACKGROUND};
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  max-width: 117.4rem;
`;

export const FilterContainer = styled.div`
  width: 100%;
  align-self: start;
  justify-self: start;

  display: flex;
  flex-direction: column;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    margin-top: 4rem;
  }
`;

export const FilterColumnContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;

  border-bottom: 1px solid ${THEME.SOFT_BORDER};
  background-color: white;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    background-color: inherit;
  }
`;

export const DesktopColumnContainer = styled(FilterColumnContainer)`
  display: none;
  padding: 2rem 0rem;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const MobileColumnContainer = styled(FilterColumnContainer)`
  display: flex;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    display: none;
  }
`;

export const FilterCategoryButton = styled.div<ActiveProps>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 1.4rem;
  font-weight: bold;
  cursor: pointer;

  background-color: white;

  color: ${(props) => (props.active ? 'black' : 'gray')};
  border-bottom: ${(props) => (props.active ? `1px solid ${THEME.THEME_ORANGE}` : `1px solid ${THEME.SOFT_BORDER}`)};
  height: 3.6rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 4.4rem;
    background-color: ${(props) => (props.active ? 'white' : 'inherit')};
    color: ${(props) => (props.active ? THEME.THEME_ORANGE : 'gray')};
    border: 1px solid ${THEME.DARK_BORDER};
  }
`;

export const StyleCategoryButton = styled.div`
  display: flex;
  align-items: center;

  width: 10rem;
  padding: 0rem 1rem;
  height: 3.2rem;
`;

export const StyleCategoryButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 1rem;

  font-size: 1.2rem;
  color: ${THEME.THEME_ORANGE};
`;

export const FilterButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 3.2rem;
  padding: 1.2rem;

  border-left: 1px solid ${THEME.SOFT_BORDER};
`;

export const FilterButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;

  font-size: 1.2rem;
`;

export const DesktopCategoryButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 21.3rem;

  border: 1px solid ${THEME.DARK_BORDER};
`;

export const DesktopSearchBar = styled.div`
  display: flex;
  align-items: center;

  width: 14rem;
  height: 3.2rem;
  justify-self: center;

  border: 1px solid ${THEME.DARK_BORDER};
  background-color: #ebeef0;
  overflow: hidden;

  svg {
    fill: #a9aaab;
  }

  svg,
  div {
    position: absolute;
  }

  input {
    z-index: 2;
    height: 3.2rem;
    width: 14rem;
    margin-left: 0.3rem;
    background-color: transparent;
    border: none;
    font-size: 1.1rem;
    outline: none;
    padding: 0.3rem;
  }

  &:focus-within {
    background-color: ${THEME.THEME_ORANGE};

    svg,
    div {
      display: none;
    }

    input {
      color: white;
    }
  }
`;

export const SearchBarText = styled.div`
  font-size: 1.1rem;
  color: #a9aaab;
  margin-left: 3rem;
`;

export const DesktopAgesContainer = styled.div`
  display: flex;
  padding-left: 3.3rem;
`;

export const DesktopAgesButton = styled.div<ActiveProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 4.5rem;
  height: 3.4rem;

  font-size: 1.1rem;
  border: 1px solid ${THEME.DARK_BORDER};

  background-color: ${(props) => (props.active ? 'white' : 'inherit')};
  color: ${(props) => (props.active ? THEME.THEME_ORANGE : 'gray')};
  font-weight: ${(props) => (props.active ? 'bold' : 'normal')};
`;
