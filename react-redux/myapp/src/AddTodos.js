import React, { Component } from "react";

class Addtodos extends Component {
  state = {
    content: "",
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  handleSubmit = (e) => {
    if (this.state.content !== "") {
      e.preventDefault();
      this.props.addTodo(this.state);
      this.setState({
        content: "",
      });
    } else {
      e.preventDefault();
    }
    // document.getElementById("input-id").value = "";
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          id="input-id"
          onChange={this.handleChange}
          className="input-todo"
          placeholder="new todo"
          value={this.state.content}
        ></input>
      </form>
    );
  }
}

export default Addtodos;
