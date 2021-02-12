/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React, { useState } from 'react';

import Header from '../../components/Header';
import Tasks from '../../components/Tasks';
import AddTask from '../../components/AddTask';

export default function HomePage() {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctors Appointment',
      day: 'Feb 5th at 1:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Class Meeting',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Trip Planning',
      day: 'Feb 6th at 5:30pm',
      reminder: false,
    },
    {
      id: 4,
      text: 'Departure',
      day: 'Feb 7th at 4:30am',
      reminder: true,
    },
  ]);

  // Add Task
  const addTask = task => {
    // eslint-disable-next-line no-console
    // console.log(task);
    const id = Math.floor(Math.random() * 10000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  // Delete task
  const deleteTask = id => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = id => {
    setTasks(
      tasks.map(task =>
        task.id === id ? { ...task, reminder: !task.reminder } : task,
      ),
    );
  };

  return (
    <div className="container py-5">
      <div className="card">
        <div className="card-header">
          <Header
            title="Task Manager"
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
          />
        </div>
        <div className="card-body">
          {showAddTask && <AddTask onAdd={addTask} />}
          {tasks.length > 0 ? (
            <Tasks
              tasks={tasks}
              onDelete={deleteTask}
              onToggle={toggleReminder}
            />
          ) : (
            'No Tasks to show'
          )}
        </div>
      </div>
    </div>
  );
}
