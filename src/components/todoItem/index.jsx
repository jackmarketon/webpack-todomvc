'use strict';

import React from 'react';


export default React.createClass({
  displayName: 'TodoItem',

  render() {
    return (
      <div className={cx({
        'todo-item': true,
        'completed': this.props.todo.done,
        'editing': this.state.isEditing
      })}>
        <div className="checkbox pull-left">
          <label>
            <input
              type="checkbox"
              checked={this.props.todo.done}
              onChange={this.onToggleComplete}
            /> {this.props.todo.text}
          </label>
        </div>

        <div className="pull-right">
          <button type="button" className="btn btn-info btn-sm">
            <i className="glyphicon glyphicon-pencil"></i>
          </button>
          <button type="button" className="btn btn-warning btn-sm">
            <i className="glyphicon glyphicon-remove"></i>
          </button>
        </div>
      </div>
    );
  }
});
