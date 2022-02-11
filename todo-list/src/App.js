import React from 'react';
import './App.css';
import TaskList from './TaskList';
import AddTask from './AddTask';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.task = {
      'id': '',
      'title': '',
      'status': 'open',
      'starred': false,
      'duedate': null,
    }
    this.state = {
      tasks: [],
    };
  }

  handleClick = (title) => {
    const id = this.state.tasks.length;
    this.setState(state => ({
      tasks: [...state.tasks, {...this.task, title, id}],
    }));
  }

  handleCheck = (idx) => {
    const tasks = this.state.tasks;
    if (tasks[idx].status === 'open') {
      tasks[idx].status = 'done';
    } else {
      tasks[idx].status = 'open';
    }
    this.setState({ tasks });
  }

  handleDelete = (idx) => {
    const tasks = this.state.tasks;
    tasks[idx].status = 'delete';
    this.setState({ tasks });
  }

  render() {
    return (
      <div className="App">
        <div className="toolbar">
          <h1 className="title">
            Todo List
          </h1>
        </div>
        <div className="scroll">
          <AddTask onClick={this.handleClick}/>
          <TaskList onCheck={this.handleCheck} onDelete={this.handleDelete} tasks={this.state.tasks} />
        </div>
      </div>
    );
  }
}

export default App;
