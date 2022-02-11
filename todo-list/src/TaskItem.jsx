import React from 'react';
import PropTypes from 'prop-types';


class TaskItem extends React.Component {
  handleToggle = (ev) => {
    ev.preventDefault();
    this.props.onToggle(this.props.task.id);
  }

  handleDelete = (ev) => {
    ev.preventDefault();
    this.props.onDelete(this.props.task.id);
  }

  render() {
    const checked = this.props.task.completed;
    const checkedItem = checked ? 'taskItem-checked' : '';
    return (
      <div className="taskItem">
        <div className="taskItem-checkbox">
          <input type="checkbox" onChange={this.handleToggle} checked={checked}/>
        </div>
        <div className={["taskItem-titleWrapper", checkedItem].join(" ")}>
          {this.props.task.title}
        </div>
        <a className={"taskItem-delete"} href="#!" onClick={this.handleDelete}>
          Delete
        </a>
      </div>
    );
  }
}

TaskItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskItem;
