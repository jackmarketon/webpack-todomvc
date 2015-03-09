'use strict';

import dispatcher from '../lib/dispatcher';


export const ACTION_CREATE = 'create';


export default {
  create(text) {
    dispatcher.dispatch({
      actionType: ACTION_CREATE,
      text: text
    });
  }
};
