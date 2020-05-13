import styled from 'styled-components/macro';
import { THEME, BREAKPOINT } from '../../constant';

interface ActiveProps {
  active?: boolean;
}
// z-index: ${(props) => (props.active ? 100 : 50)};

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

  border-bottom: 1px solid #f0f3f5;
  background-color: white;
  @media only screen and (min-width: ${BREAKPOINT}px) {
    background-color: inherit;
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
  border-bottom: ${(props) => (props.active ? '1px solid #ff6b00' : '1px solid #f0f3f5')};
  height: 3.6rem;

  @media only screen and (min-width: ${BREAKPOINT}px) {
    height: 4.4rem;
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

  border-left: 1px solid #f0f3f5;
`;

export const FilterButtonText = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.5rem;

  font-size: 1.2rem;
`;
