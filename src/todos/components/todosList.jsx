import React from 'react';

import TodoItem from './todoItem';

import './todosList.less';


export default class TodosList extends React.Component {
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
}
