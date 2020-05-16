import styled from 'styled-components/macro';
import { HTMLAttributes } from 'react';

export const Drag = styled.div`
  width: 100%;
  height: 100%;
`;

export const DragContainer = styled.div`
  padding: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;

  margin-bottom: 3rem;
`;

export const A4Sheet = styled.div`
  width: 60rem;
  height: 100rem;

  border: 3px solid black;
`;

export const A4Row = styled.div`
  display: flex;

  border: 1px solid blue;
  min-height: 200px;
`;

export const ButtonWrapper = styled.div`
  width: 30%;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AddButton = styled.button`
  width: 10rem;
  height: 5rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  border-radius: 0.5rem;

  margin-bottom: 2rem;
`;

export const LineInput = styled.input`
  width: 6rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border: 1px solid black;
  border-radius: 0.5rem;

  margin-bottom: 2rem;
`;

interface DraggableProps extends HTMLAttributes<HTMLDivElement> {
  width: number;
  height: number;
}

export const Draggable = styled.div<DraggableProps>`
  width: ${(props) => `${props.width}px`};
  height: ${(props) => `${props.height}px`};

  border: 2px solid red;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  color: black;

  background-color: pink;
`;
