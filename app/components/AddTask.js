import React, { useState } from 'react';

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = e => {
    e.preventDefault();

    if (!text) {
      // eslint-disable-next-line no-alert
      alert('please Add a Task');
      return;
    }

    onAdd({ text, day, reminder });

    setText('');
    setDay('');
    setReminder(false);
  };

  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div>
        <label htmlFor="taskName">Name</label>
        <input
          className="form-control mb-2"
          type="text"
          id="taskName"
          value={text}
          onChange={e => setText(e.target.value)}
          placeholder="Add Task"
        />
      </div>

      <div>
        <label htmlFor="date">Date and Time</label>
        <input
          className="form-control mb-2"
          type="text"
          id="date"
          value={day}
          onChange={e => setDay(e.target.value)}
          placeholder="Add Date and Time"
        />
      </div>

      <div>
        <input
          type="checkbox"
          id="setReminder"
          checked={reminder}
          value={reminder}
          onChange={e => setReminder(e.currentTarget.checked)}
        />
        <label htmlFor="setReminder"> Reminder </label>
      </div>

      <input
        type="submit"
        className="btn btn-secondary btn-sm my-2"
        value="Save Task"
      />
    </form>
  );
};

export default AddTask;
