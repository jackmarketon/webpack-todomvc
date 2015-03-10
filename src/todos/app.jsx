'use strict';

import React from 'react';

import TodoInput from './components/todoInput';
import TodosList from './components/todosList';
import todosActions from './actions';
import todosStore from './store';

import {EVENT_CHANGE} from './store';

import '../bootstrap.less';
import './app.less';


var getTodosState = function() {
  return {
    todos: todosStore.getAll()
  };
};


var TodoApp = React.createClass({
  getInitialState() {
    return getTodosState();
  },

  create(text) {
    todosActions.create(text);
  },

  componentDidMount() {
    todosStore.on(EVENT_CHANGE, this.onChange);
  },

  componentWillUnmount() {
    todosStore.removeListener(EVENT_CHANGE, this.onChange);
  },

  onChange() {
    this.setState(getTodosState());
  },

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-offset-2 col-sm-8 app">
            <h1>Hello</h1>
            <TodoInput
              createHandler={this.create}
              placeholder="What to do?"
            />
            <TodosList todos={this.state.todos} />
          </div>
        </div>
      </div>
    );
  }
});


React.render(<TodoApp />, document.body);
