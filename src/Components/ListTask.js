import React from 'react';
import Task from './Tasks';
import { useSelector } from 'react-redux';

const ListTask = () => {
  const tasks = useSelector((state) => state.tasks);

  return (
    <div>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;
