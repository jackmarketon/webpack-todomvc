'use strict';

import React from 'react';

import './todoInput.less';

const RETURN_KEY_CODE = 13;


var TodoInput = React.createClass({
  getInitialState() {
    return {
      value: this.props.value || ''
    };
  },

  save() {
    this.props.onSave(this.state.value);
    this.setState({
      value: ''
    });
  },

  onChange(ev) {
    this.setState({
      value: ev.target.value
    });
  },

  onKeyDown: function(ev) {
    if (ev.keyCode === RETURN_KEY_CODE) {
      this.save();
    }
  },

  render() {
    return (
      <div className="todo-input">
        <input
          type="text"
          className="form-control"
          value={this.state.value}
          onBlur={this.save}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          autoFocus={true}
        />
        <button onClick={this.save} className="btn btn-info">save</button>
      </div>
    );
  }
});


export default TodoInput;
