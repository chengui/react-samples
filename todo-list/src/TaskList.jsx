import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Actions } from './Store';
import TaskItem from './TaskItem';


class TaskList extends React.Component {
  render() {
    const todoTasks = this.props.tasks.filter(task => !task.completed);
    const doneTasks = this.props.tasks.filter(task => task.completed);
    return (
      <div className="taskList">
        <ol className="tasks">
          {todoTasks
            .map((task, idx) => (
              <li key={idx} className="item">
                <TaskItem task={task} onToggle={this.props.onToggle} onDelete={this.props.onDelete}/>
              </li>
            ))
          }
        </ol>
        <h2 className="heading">
          { doneTasks.length > 0 ? "Show Completed to-dos" : "" }
        </h2>
        <ol className="tasks">
          {doneTasks
            .map((task, idx) => (
              <li key={idx} className="item">
                <TaskItem task={task} onToggle={this.props.onToggle} onDelete={this.props.onDelete}/>
              </li>
            ))
          }
        </ol>
      </div>
    );
  }
}

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => {
  return {
    tasks: state,
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    onDelete: (id) => {
      dispatch(Actions.delTask(id));
    },
    onToggle: (id) => {
      dispatch(Actions.togTask(id));
    },
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
