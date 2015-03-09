'use strict';

import React from 'react';

import TodoInput from '../todoInput';
import Todos from '../todos';
import todoActions from '../../actions/todoActions';
import todosStore from '../../stores/todosStore';

import {EVENT_CHANGE} from '../../stores/todosStore';

import './bootstrap.less';
import './app.less';

var getTodosState = function() {
  return {
    todos: todosStore.getAll()
  };
};


export default React.createClass({
  displayName: 'App',

  getInitialState() {
    return getTodosState();
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

  onSave(text) {
    todoActions.create(text);
  },

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-offset-2 col-sm-8 app">
            <h1>Hello</h1>
            <TodoInput onSave={this.onSave} />
            <Todos todos={this.state.todos} />
          </div>
        </div>
      </div>
    );
  }
});
