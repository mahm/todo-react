// @jsx React.DOM

'use strict';

$(function () {
  var todos = new Todos();
  React.render(<TodoListView collection={todos} />, document.getElementById('todos'));
});
