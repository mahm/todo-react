// @jsx React.DOM

TodoList = window.TodoList = React.createClass({
  displayname: 'TodoList',
  getInitialState: function () {
    return {
      todos: $.parseJSON(this.props.todos)
    };
  },
  _todos: function () {
    return(_.map(this.state.todos, function (todo) {
      return(<Todo key={todo.id} data={ todo } />);
    }));
  },
  render: function () {
    return(
      <div>
        { this._todos() }
      </div>
    );
  }
});
