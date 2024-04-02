import React from "react";

const Todo = ({ id, title, completed, handleDeleteTodoItem, handleToggleTodo }) => {
  const handleDeleteTodo = (id) => {
    handleDeleteTodoItem(id);
  };
  const handleCompleted = (id) => {
    handleToggleTodo(id);
  };

  
  return (
    <div>
      <span>
        <input type="checkbox" onChange={() => handleCompleted(id)} />
        <span style={{textDecoration:`${ completed ? "line-through" : ""}`}} >{title}</span> <span onClick={() => handleDeleteTodo(id)}>x</span>
      </span>
    </div>
  );
};

export default Todo;
