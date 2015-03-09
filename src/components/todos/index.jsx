'use strict';

import React from 'react';


export default React.createClass({
  displayName: 'Todos',

  getInitialState() {
    return this.props;
  },

  render() {
    var todos = this.state.todos.map((todo) => {
      return <li>{todo.text} {(todo.done) ? '✓':'✗'}</li>;
    });

    return (
      <div className="well">
        <ul>{todos}</ul>
      </div>
    );
  }
});
