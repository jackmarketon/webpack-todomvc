'use strict';

import React from 'react';

import TodoItem from '../todoItem';


export default React.createClass({
  displayName: 'Todos',

  getInitialState() {
    return this.props;
  },

  render() {
    var todos = this.state.todos.map((todo, idx) => {
      return <TodoItem todo={todo} key={idx} />;
    });

    return (
      <div className="well">
        {todos}
      </div>
    );
  }
});
