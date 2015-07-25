import dispatcher from '../dispatcher';


export const ACTION_CREATE = 'create';
export const ACTION_DESTROY = 'destroy';


export default {
  create(text) {
    dispatcher.dispatch({
      actionType: ACTION_CREATE,
      text: text + text,
    });
  },
};
