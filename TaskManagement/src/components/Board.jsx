
import React from 'react';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import { v4 as uuidv4 } from 'uuid';

import Column from './Column';

const Board = ({ boardData, setBoardData }) => {
  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;

    if (
      source.droppableId === destination.droppableId &&
      source.index === destination.index
    )
      return;

    const startCol = boardData.columns[source.droppableId];
    const endCol = boardData.columns[destination.droppableId];

    if (startCol === endCol) {
      const newTaskIds = Array.from(startCol.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = { ...startCol, taskIds: newTaskIds };

      setBoardData({
        ...boardData,
        columns: { ...boardData.columns, [newColumn.id]: newColumn },
      });
    } else {
      const startTaskIds = Array.from(startCol.taskIds);
      startTaskIds.splice(source.index, 1);
      const newStart = { ...startCol, taskIds: startTaskIds };

      const endTaskIds = Array.from(endCol.taskIds);
      endTaskIds.splice(destination.index, 0, draggableId);
      const newEnd = { ...endCol, taskIds: endTaskIds };

      setBoardData({
        ...boardData,
        columns: {
          ...boardData.columns,
          [newStart.id]: newStart,
          [newEnd.id]: newEnd,
        },
      });
    }
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="d-flex overflow-auto gap-3 px-2">
        {boardData.columnOrder.map((colId) => {
          const column = boardData.columns[colId];
          const tasks = column.taskIds.map((taskId) => boardData.tasks[taskId]);

          return (
            <Column key={column.id} column={column} tasks={tasks} setBoardData={setBoardData} boardData={boardData} />
          );
        })}
      </div>
    </DragDropContext>
  );
};

export default Board;
