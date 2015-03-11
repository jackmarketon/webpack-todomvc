/* jshint node: true, jasmine: true */
'use strict';

import React from 'react';
import testUtils from 'react/lib/ReactTestUtils';

import TodoItem from '../../src/todos/components/todoItem';


describe('<TodoItem>', function() {
  var testTodo = {id:1, text:'foo', done:true};
  var todoItem, todoItemDOMNode;

  beforeEach(function() {
    todoItem = testUtils.renderIntoDocument(<TodoItem todo={testTodo} />);
    todoItemDOMNode = todoItem.getDOMNode();
  });


  it('should render correctly', function() {
    var todoItemCheckbox = todoItemDOMNode.querySelector('input[type="checkbox"]');

    expect(todoItemDOMNode.textContent).toEqual(' foo');
    expect(todoItemCheckbox.checked).toEqual(true);
  });
});
