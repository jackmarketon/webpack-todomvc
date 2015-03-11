'use strict';

import _ from 'lodash';
import {EventEmitter} from 'events';
import dispatcher from '../dispatcher';

import {ACTION_CREATE,
        ACTION_DESTROY} from './actions';
export const EVENT_CHANGE = 'change';

var todos = [
  {id: 1, text: 'christmas', done: true},
  {id: 2, text: 'easter', done: false}
];


var todosStore = Object.assign({}, EventEmitter.prototype, {
  getAll() {
    return todos;
  }
});


dispatcher.register((payload) => {
  switch (payload.actionType) {
    case ACTION_CREATE:
      let text = payload.text.trim();
      if (text) {
        let id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36);
        todos.push({
          id: id,
          text: text,
          done: false,
        });
      }
      todosStore.emit(EVENT_CHANGE);
      break;

    case ACTION_DESTROY:
      let idx = _.findIndex(todos, (todo) => {
        return todo.id === payload.id;
      });
      if (idx > -1) {
        todos.splice(idx, 1);
      }
      break;
  }
});


export default todosStore;
