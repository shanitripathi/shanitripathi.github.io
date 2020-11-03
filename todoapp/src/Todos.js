import React from "react";

function Todos({ todos, deleteTodo }) {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div className="collection-item" key={todo.id}>
          <span className="item">{todo.content}</span>
          <button
            className="btn-delete"
            onClick={() => {
              deleteTodo(todo.id);
            }}
          >
            Delete
          </button>
        </div>
      );
    })
  ) : (
    <p className="item">You have no todos left</p>
  );
  return <div>{todoList}</div>;
}

export default Todos;
