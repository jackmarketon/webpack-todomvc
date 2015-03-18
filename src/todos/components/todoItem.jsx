import React from 'react';
import cx from 'classnames';

import TodoInput from './todoInput';
import todoActions from '../actions';

import './todoItem.less';


export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false,
    };
  }

  onToggleComplete() {
  }

  onDestroy() {
  }

  onSave() {
  }

  render() {
    return (
      <div className={cx('todo-item', {
        completed: this.props.todo.done,
        editing: this.state.isEditing,
      })}>
        <div className="checkbox pull-left">
          <label>
            <input
              type="checkbox"
              checked={this.props.todo.done}
              onChange={this.onToggleComplete.bind(this)}
            /> {this.props.todo.text}
          </label>
        </div>

        <button type="button" className="todo-item-action btn btn-danger btn-sm">
          <i className="glyphicon glyphicon-remove"></i>
        </button>
        <button type="button" className="todo-item-action btn btn-info btn-sm">
          <i className="glyphicon glyphicon-pencil"></i>
        </button>
      </div>
    );
  }
}
