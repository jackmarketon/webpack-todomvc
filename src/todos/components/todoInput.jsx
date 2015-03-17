'use strict';

import React from 'react';
var ReactPropTypes = React.PropTypes;

import './todoInput.less';

const RETURN_KEY_CODE = 13;


export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value || ''
    };
  }

  create() {
    this.props.createHandler(this.state.value);
    this.setState({value: ''});
  }

  onChange(ev) {
    this.setState({
      value: ev.target.value
    });
  }

  onKeyDown(ev) {
    if (ev.keyCode === RETURN_KEY_CODE) {
      this.create();
    }
  }

  render() {
    var className = ('form-control ' + (this.props.className || '')).trim();

    return (
      <div className="todo-input">
        <input
          type="text"
          className={className}
          value={this.state.value}
          onBlur={this.create.bind(this)}
          onChange={this.onChange.bind(this)}
          onKeyDown={this.onKeyDown.bind(this)}
          placeholder={this.props.placeholder}
          autoFocus={true}
        />
        <button onClick={this.create.bind(this)} className="btn btn-info">save</button>
      </div>
    );
  }
}

TodoInput.propTypes = {
  createHandler: ReactPropTypes.func.isRequired,
  className: ReactPropTypes.string,
  value: ReactPropTypes.string,
  placeholder: ReactPropTypes.string
};
