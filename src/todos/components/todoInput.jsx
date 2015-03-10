'use strict';

import React from 'react';
var ReactPropTypes = React.PropTypes;

import './todoInput.less';

const RETURN_KEY_CODE = 13;


var TodoInput = React.createClass({
  propTypes: {
    createHandler: ReactPropTypes.func.isRequired,
    className: ReactPropTypes.string,
    value: ReactPropTypes.string,
    placeholder: ReactPropTypes.string
  },

  getInitialState() {
    return {
      value: this.props.value || ''
    };
  },

  create() {
    this.props.createHandler(this.state.value);
    this.setState({value: ''});
  },

  onChange(ev) {
    this.setState({
      value: ev.target.value
    });
  },

  onKeyDown: function(ev) {
    if (ev.keyCode === RETURN_KEY_CODE) {
      this.create();
    }
  },

  render() {
    var className = ('form-control ' + (this.props.className || '')).trim();

    return (
      <div className="todo-input">
        <input
          type="text"
          className={className}
          value={this.state.value}
          onBlur={this.create}
          onChange={this.onChange}
          onKeyDown={this.onKeyDown}
          placeholder={this.props.placeholder}
          autoFocus={true}
        />
        <button onClick={this.create} className="btn btn-info">save</button>
      </div>
    );
  }
});


export default TodoInput;
