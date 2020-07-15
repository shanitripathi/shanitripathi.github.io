import React, { Component } from "react";
import Todos from "./Todos";
import Addtodos from "./AddTodos";
class App extends React.Component {
  state = {
    todos: [],
  };
  addTodo = (todo) => {
    todo.id = Math.random();
    let todos = this.state.todos;
    todos.push(todo);
    this.setState({
      todos: todos,
    });
    // let todos = [...this.state.todos, todo];
    // this.setState({
    //   todos: todos,
    // });
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
        <Addtodos addTodo={this.addTodo} />
      </div>
    );
  }
}
export default App;
