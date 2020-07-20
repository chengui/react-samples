import React from 'react';


class TaskItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      task:{},
    };
  }

  render() {
      // style={{"fill":none,"stroke-width":1px}}>
    return (
      <div className="taskItem">
        <a className="taskItem-checkbox" href="!#">
          <svg className="task-check" width="20px" height="20px" viewBox="0 0 20 20" version="1.1">
            <g>
              <path d="M17.5,4.5c0,-0.53 -0.211,-1.039 -0.586,-1.414c-0.375,-0.375 -0.884,-0.586 -1.414,-0.586c-2.871,0 -8.129,0 -11,0c-0.53,0 -1.039,0.211 -1.414,0.586c-0.375,0.375 -0.586,0.884 -0.586,1.414c0,2.871 0,8.129 0,11c0,0.53 0.211,1.039 0.586,1.414c0.375,0.375 0.884,0.586 1.414,0.586c2.871,0 8.129,0 11,0c0.53,0 1.039,-0.211 1.414,-0.586c0.375,-0.375 0.586,-0.884 0.586,-1.414c0,-2.871 0,-8.129 0,-11Z">
              </path>
            </g>
          </svg>
        </a>
        <div className="taskItem-titleWrapper">
          {this.props.task.title}
        </div>
      </div>
    );
  }
}

export default TaskItem;
