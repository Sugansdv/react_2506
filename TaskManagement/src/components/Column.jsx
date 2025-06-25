import React, { useState } from 'react';
import { Droppable } from '@hello-pangea/dnd';
import TaskCard from './TaskCard';
import { v4 as uuidv4 } from 'uuid';

const Column = ({ column, tasks, setBoardData, boardData }) => {
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (!newTask.trim()) return;

    const id = 'task-' + uuidv4().slice(0, 5);
    const updatedTasks = {
      ...boardData.tasks,
      [id]: { id, content: newTask.trim() },
    };

    const updatedColumn = {
      ...column,
      taskIds: [...column.taskIds, id],
    };

    setBoardData({
      ...boardData,
      tasks: updatedTasks,
      columns: {
        ...boardData.columns,
        [column.id]: updatedColumn,
      },
    });

    setNewTask('');
  };

  // Color based on column title
  const getHeaderColor = (title) => {
    switch (title.toLowerCase()) {
      case 'to do':
        return '#0d6efd'; // Bootstrap Blue
      case 'in progress':
        return '#ffc107'; // Bootstrap Yellow
      case 'done':
        return '#198754'; // Bootstrap Green
      default:
        return '#6c757d'; // Gray
    }
  };

  return (
    <div
      className="rounded shadow-sm overflow-hidden"
      style={{ minWidth: '300px', backgroundColor: '#f8f9fa' }}
    >
      <div
        className="text-white text-center p-2 fw-semibold"
        style={{
          backgroundColor: getHeaderColor(column.title),
        }}
      >
        {column.title}
      </div>

      <Droppable droppableId={column.id}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            style={{
              minHeight: '100px',
              padding: '10px',
              backgroundColor: snapshot.isDraggingOver ? '#e2e6ea' : 'inherit',
              transition: 'background-color 0.2s ease',
            }}
          >
            {tasks.map((task, index) => (
              <TaskCard key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </div>
        )}
      </Droppable>

      <div className="p-2 border-top">
        <input
          type="text"
          className="form-control form-control-sm mb-2"
          placeholder="Add a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button className="btn btn-sm btn-primary w-100" onClick={handleAddTask}>
          ➕ Add Task
        </button>
      </div>
    </div>
  );
};

export default Column;
