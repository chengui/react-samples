import React from 'react';
import TaskItem from './TaskItem';


class TaskList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [
        {
          title: 'test',
          status: 'open',
          starred: true,
          duedate: null,
        },
        {
          title: 'test2',
          status: 'open',
          starred: true,
          duedate: null,
        }
      ],
    };
  }

  render() {
    return (
      <div className="taskList">
        <ol className="tasks">
          {this.state.tasks
             .filter(task => task.status === 'open')
             .map(task => (
               <li className="item">
                  <TaskItem task={task} />
               </li>
             ))
          }
        </ol>
        <h2 className="heading">
          Show Completed to-dos
        </h2>
        <ol className="tasks">
          {this.state.tasks
             .filter(task => task.status === 'open')
             .map(task => (
               <li className="item">
                  <TaskItem task={task} />
               </li>
             ))
          }
        </ol>
      </div>
    );
  }
}

export default TaskList;
