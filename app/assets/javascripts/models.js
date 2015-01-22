'use strict';

var Todo = Backbone.Model.extend({
});

var Todos = Backbone.Collection.extend({
  url: '/todos',
  model: Todo
});
