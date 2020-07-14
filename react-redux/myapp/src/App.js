import React, { Component } from "react";
import Todos from "./Todos";
class App extends React.Component {
  state = {
    todos: [
      { id: 1, content: "buy some milk" },
      { id: 2, content: "Go to the gym" },
    ],
  };
  deleteTodo = (id) => {
    let todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };
  render() {
    return (
      <div className="main-box">
        <h1 className="header-text">To-Do list</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    );
  }
}
export default App;
