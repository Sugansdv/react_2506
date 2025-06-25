export const initialData = {
  tasks: {
    'task-1': { id: 'task-1', content: 'Buy groceries' },
    'task-2': { id: 'task-2', content: 'Finish project report' },
    'task-3': { id: 'task-3', content: 'Read a book' },
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To Do',
      taskIds: ['task-1', 'task-2'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: [],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: ['task-3'],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};
