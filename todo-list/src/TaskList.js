import React from 'react';
import TaskItem from './TaskItem';


class TaskList extends React.Component {
  render() {
    return (
      <div className="taskList">
        <ol className="tasks">
          {this.props.tasks
             .filter(task => task.status === 'open')
             .map((task, idx) => (
               <li key={idx} className="item">
                  <TaskItem task={task} onCheck={this.props.onCheck} onDelete={this.props.onDelete}/>
               </li>
             ))
          }
        </ol>
        <h2 className="heading">
          Show Completed to-dos
        </h2>
        <ol className="tasks">
          {this.props.tasks
             .filter(task => task.status === 'done')
             .map((task, idx) => (
               <li key={idx} className="item">
                  <TaskItem task={task} onCheck={this.props.onCheck} onDelete={this.props.onDelete}/>
               </li>
             ))
          }
        </ol>
      </div>
    );
  }
}

export default TaskList;
