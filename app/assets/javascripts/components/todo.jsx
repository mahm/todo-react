// @jsx React.DOM

Todo = window.Todo = React.createClass({
  displayname: 'Todo',
  render: function () {
    return(
      <div>
        {this.props.data.name} {this.props.data.done_at}
      </div>
    );
  }
});