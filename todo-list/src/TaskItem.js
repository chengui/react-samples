import React from 'react';


class TaskItem extends React.Component {
  handleCheck = (ev) => {
    ev.preventDefault();
    this.props.onCheck(this.props.task.id);
  }

  handleDelete = (ev) => {
    ev.preventDefault();
    this.props.onDelete(this.props.task.id);
  }

  render() {
    const checked = this.props.task.status === 'done';
    const checkedItem = checked ? 'taskItem-checked' : '';
    return (
      <div className="taskItem">
        <div className="taskItem-checkbox">
          <input type="checkbox" onChange={this.handleCheck} checked={checked}/>
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

export default TaskItem;
