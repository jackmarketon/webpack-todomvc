'use strict';

import React from 'react';

import TodoItem from './todoItem';

import './todosList.less';


var TodosList = React.createClass({
  render() {
    var todos = this.props.todos.map((todo, idx) => {
      return <TodoItem todo={todo} key={idx} />;
    });

    return (
      <div className="todos-list">
        {todos}
      </div>
    );
  }
});


export default TodosList;
