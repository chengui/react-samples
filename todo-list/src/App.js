import React from 'react';
import './App.css';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
  return (
    <div className="App">
      <div className="toolbar">
        <h1 className="title">
          Todo List
        </h1>
      </div>
      <div className="scroll">
        <AddTask onClick={null}/>
        <TaskList tasks={null} />
      </div>
    </div>
  );
}

export default App;
