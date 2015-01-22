// @jsx React.DOM

'use strict';

var TodoListView = window.TodoListView = React.createClass({
  mixins: [Backbone.React.Component.mixin],
  displayname: 'TodoListView',
  getInitialState: function() {
    this.getCollection().fetch();
    return {
      name: ''
    };
  },
  handleChangeName: function (e) {
    this.setState({name: e.target.value});
  },
  handleSubmit: function (e) {
    e.preventDefault();
    var collection = this.getCollection();
    collection.create(this.state, {wait: true});
    this.replaceState(this.getInitialState());
  },
  render: function () {
    var todos = this.getCollection().models.map(function (todo) {
      return <TodoView key={todo.id} model={todo.attributes} />;
    });
    return(
      <div>
        <div>{ todos }</div>
        <form method="POST" onSubmit={this.handleSubmit}>
          <div className="field">
            <input onChange={this.handleChangeName} value={this.state.name} />
          </div>
          <button>{ 'Add' }</button>
        </form>
      </div>
    );
  }
});