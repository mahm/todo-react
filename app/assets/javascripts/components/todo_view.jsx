// @jsx React.DOM

'use strict';

var TodoView = window.TodoView = React.createClass({
  mixin: [Backbone.React.Component.mixin],
  displayname: 'TodoView',
  render: function () {
    return(
      <div>
        {this.props.model.name}
      </div>
    );
  }
});
