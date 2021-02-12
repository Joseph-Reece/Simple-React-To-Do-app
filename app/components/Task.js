import React from 'react';
import PropTypes from 'prop-types';

const Task = ({ task, onDelete, onToggle }) => (
  <div
    className={`task ${task.reminder ? 'reminder' : ''}`}
    onDoubleClick={() => onToggle(task.id)}
  >
    <h3>
      {task.text}
      <i
        className="fas fa-times text-danger"
        onClick={() => onDelete(task.id)}
      />
    </h3>
    <p>{task.day}</p>
  </div>
);

Task.propTypes = {
  onDelete: PropTypes.func,
  onToggle: PropTypes.func,
};

export default Task;
