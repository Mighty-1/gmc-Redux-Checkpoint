import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleTask, deleteTask, editTask } from '../redux/actions';

const Task = ({ task }) => {
  const dispatch = useDispatch();
  const [editMode, setEditMode] = React.useState(false);
  const [newDescription, setNewDescription] = React.useState(task.description);

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleDelete = () => {
    dispatch(deleteTask(task.id));
  };

  const handleEdit = () => {
    dispatch(editTask(task.id, newDescription));
    setEditMode(false);
  };

  return (
    <div>
      {editMode ? (
        <>
          <input
            type="text"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }}>
            {task.description}
          </span>
          <button onClick={handleToggle}>{task.isDone ? 'Undo' : 'Done'}</button>
          <button onClick={handleDelete}>Delete</button>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Task;
