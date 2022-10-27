/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import uniquid from 'uniquid';

function Overview(props) {
  const { task } = props;
  const tasks = task.map((item) => <p key={uniquid()}>{item.task}</p>);

  return (
    <div>
      {tasks}
    </div>
  );
}

export default Overview;
