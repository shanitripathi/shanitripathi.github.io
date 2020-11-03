import React, { Component } from "react";
import Todos from "./Todos";
import AddForm from "./AddForm";
class App extends Component {
  state = {
    todos: [
      { id: 1, content: "buy milk" },
      { id: 2, content: "Play Mario kart" },
    ],
  };
  deleteTodo = (id) => {
    const todos = this.state.todos.filter((todo) => {
      return todo.id !== id;
    });
    this.setState({
      todos: todos,
    });
  };
  AddTodo = (todo) => {
    todo.id = Math.random() * 100;
    const todos = [...this.state.todos, todo];
    this.setState({
      todos,
    });
  };
  render() {
    return (
      <div className="App container text-center">
        <h1>Todo-APP</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
        <AddForm AddTodo={this.AddTodo} />
      </div>
    );
  }
}

export default App;
