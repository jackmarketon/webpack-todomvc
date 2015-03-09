'use strict';

import React from 'react';

const RETURN_KEY_CODE = 13;


export default React.createClass({
  displayName: 'TodoInput',

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
      <div className="form-inline">
        <div className="form-group">
          <input
            className="form-control"
            onBlur={this.save}
            onChange={this.onChange}
            onKeyDown={this.onKeyDown}
            value={this.state.value}
            autoFocus={true}
          />
          <button className="btn btn-info" onClick={this.save}>save</button>
        </div>
      </div>
    );
  }
});
