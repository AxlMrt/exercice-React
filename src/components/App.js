/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Overview from './Overview';

function App() {
  const [taskArray, setTaskArray] = React.useState([]);

  const [tasks, setTasks] = React.useState({
    task: '',
  });

  function addTasks() {
    setTaskArray((current) => [...current, tasks]);
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setTasks((prevInput) => ({
      ...prevInput,
      [name]: value,
    }));
  }

  return (
    <div>
      <input
        type="text"
        name="task"
        value={tasks.task}
        onChange={handleChange}
      />
      <button onClick={addTasks}>Send</button>

      <Overview
        key={taskArray.length - 1}
        task={taskArray}
      />
    </div>
  );
}

export default App;
