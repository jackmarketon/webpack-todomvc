/* jshint node: true, jasmine: true */
'use strict';

var dispatcher = require('../../src/dispatcher');
var todosActionsModule = require('../../src/todos/actions');
var todosStore;
var storeRegisterCallback;


describe('todos/store', function() {
  beforeEach(function() {
    spyOn(dispatcher, 'register').and.callThrough();

    // require() calls are cached!
    // delete cached module, require() call re-evaluates module - we want that
    var moduleId = require.resolve('../../src/todos/store');
    delete require.cache[moduleId];
    todosStore = require('../../src/todos/store').default;

    storeRegisterCallback = dispatcher.register.calls.argsFor(0)[0];
  });


  it('should initialize with dummy TODO items', function() {
    var all = todosStore.getAll();

    expect(all.length).toEqual(2);
  });

  it('should register a callback with the dispatcher', function() {
    expect(dispatcher.register).toHaveBeenCalled();
  });

  it('shoud create a TODO item', function() {
    // manually dispatch create action
    storeRegisterCallback({
      actionType: todosActionsModule.ACTION_CREATE,
      text: 'Lorem ipsum'
    });

    var all = todosStore.getAll();
    var last = all[all.length - 1];

    expect(all.length).toBe(3);
    expect(last.text).toEqual('Lorem ipsum');
  });

  it('should destroy a TODO item', function() {
    var before = todosStore.getAll().length;

    // manually dispatch destroy action
    storeRegisterCallback({
      actionType: todosActionsModule.ACTION_DESTROY,
      id: 1
    });

    var after = todosStore.getAll().length;

    expect(before).toEqual(2);
    expect(after).toEqual(1);
  });
});
