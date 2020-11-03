import React, { Component } from "react";

class AddForm extends Component {
  state = {
    content: "",
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.AddTodo(this.state);
  };
  handleChange = (e) => {
    this.setState({
      content: e.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="form-group">
        <input type="text" name="" id="" onChange={this.handleChange} />
      </form>
    );
  }
}

export default AddForm;
