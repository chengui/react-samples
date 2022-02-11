import React from 'react';
import TaskList from './TaskList';
import AddTask from './AddTask';

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <div className="toolbar">
          <h1 className="title">
            Todo List
          </h1>
        </div>
        <div className="scroll">
          <AddTask />
          <TaskList />
        </div>
      </div>
    );
  }
}

export default App;
