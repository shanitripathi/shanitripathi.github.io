import React from "react";

const Todos = ({ todos, deleteTodo }) => {
  const todoList = todos.length ? (
    todos.map((todo) => {
      return (
        <div key={todo.id}>
          <span className="todo-name">
            {todo.content}{" "}
            <button
              onClick={() => {
                deleteTodo(todo.id);
              }}
            >
              Delete
            </button>
          </span>
        </div>
      );
    })
  ) : (
    <p className="notodo-para">No todos</p>
  );
  return <div className="todos collection">{todoList}</div>;
};

export default Todos;
