/* eslint-disable react/button-has-type */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import Overview from './Overview';

function App() {
  const [taskArray, setTaskArray] = React.useState([]);

  function handleChange(e) {
    const newData = e.taget.value;
    setTaskArray((prevData) => ({
      ...prevData,
      newData,
    }));
  }

  function onSubmit(e) {
    e.preventDefault();
    setTaskArray({
      setTaskArray: taskArray.concat(taskArray),
      taskArray: { text: '' },
    });
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Send</button>
      </form>
      <Overview />
    </div>
  );
}

export default App;
