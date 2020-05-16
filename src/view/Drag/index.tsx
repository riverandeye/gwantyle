import React, { useState } from 'react';

import * as S from './styles';

const maxWidth = 600;
const maxHeight = 1000;

// class Movable {
//   public constructor(public x: number, public y: number, public w: number, public h: number) {}
// }

interface DraggableProps {
  Id: number;
  width: number;
  height: number;
  children?: React.ReactNode;
  onDragStart?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnd?: (e: React.DragEvent<HTMLDivElement>) => void;
  onDragEnter?: (e: React.DragEvent<HTMLDivElement>) => void;
}

const Draggable: React.FC<DraggableProps> = ({ Id, width, height, children, onDragEnd, onDragStart, onDragEnter }) => {
  return (
    <S.Draggable
      onDragStart={onDragStart}
      onDragEnd={onDragEnd}
      onDragEnter={onDragEnter}
      draggable={true}
      key={Id}
      width={width}
      height={height}
      id={Id.toString()}
    >
      {children}
    </S.Draggable>
  );
};

const Drag: React.FC = () => {
  const [rowCount, setRowCount] = useState(1);
  const [objectCount, setObjectCount] = useState(1);
  const [targetRow, setTargetRow] = useState(1);
  const [objects, setObjects] = useState([[1, 2, 3], [4, 5, 6] as number[]]);

  const [currentDragingElement, setCurrentDraggingElement] = useState(-1);
  const [currentEnteredElement, setCurrentEnteredElement] = useState(-1);

  const onDragStartHandler = (e: any) => {
    setCurrentDraggingElement(parseInt(e.target.id));
  };

  const onDragEndHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log(currentEnteredElement);
    console.log(currentDragingElement);

    const newObject = [] as number[][];

    objects.forEach((row, idx) => {
      let newRow = row;
      console.log(newRow);
      const draggingIdx = row.indexOf(currentDragingElement);
      if (draggingIdx !== -1) {
        newRow.splice(draggingIdx, 1);
      }
      console.log(newRow);

      const enteredIdx = row.indexOf(currentEnteredElement);
      if (enteredIdx !== -1) {
        newRow.push(currentDragingElement);
      }
      console.log(newRow);

      newObject.push(newRow);
    });

    setObjects(newObject);
    setObjectCount(objectCount + 1);
  };

  const onDragEnter = (e: any) => {
    e.stopPropagation();
    setCurrentEnteredElement(parseInt(e.target.id));
  };

  const innerComponents = objects.map((data: number[], idx2: number) => (
    <S.A4Row key={idx2}>
      {data.map((Id: number, idx: number) => (
        <Draggable
          Id={Id}
          key={idx}
          width={200}
          height={200}
          onDragEnd={onDragEndHandler}
          onDragStart={onDragStartHandler}
          onDragEnter={onDragEnter}
        >
          {Id}
        </Draggable>
      ))}
    </S.A4Row>
  ));

  const addRow = () => {
    setObjects([...objects, []]);
    setRowCount(rowCount + 1);
  };

  const addObject = () => {
    if (targetRow > rowCount) return;

    const newObject = [] as number[][];

    objects.forEach((row, idx) => {
      if (idx === targetRow - 1) {
        newObject.push([...row, objectCount + 1]);
      } else {
        newObject.push(row);
      }
    });

    setObjects(newObject);
    setObjectCount(objectCount + 1);
  };

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTargetRow(parseInt(e.target.value));
  };

  return (
    <S.Drag>
      <S.DragContainer>
        <S.Title>Draggable 만들기</S.Title>
        <S.ButtonWrapper>
          <S.AddButton onClick={addRow}>줄 추가하기</S.AddButton>
          <S.AddButton onClick={addObject}>추가하기</S.AddButton>
          <S.LineInput value={targetRow} onChange={handleInput} type="number" />
        </S.ButtonWrapper>
        <S.A4Sheet>{innerComponents}</S.A4Sheet>
      </S.DragContainer>
    </S.Drag>
  );
};

export default Drag;
