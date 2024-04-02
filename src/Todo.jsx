import React from "react";

const Todo = ({id, title, completed, handleDeleteTodoItem }) => {
  const handleDeleteTodo = (id) => {
    handleDeleteTodoItem(id);    
  }
  return (
    <div>
      <span>
        <input type="checkbox" />
        {title} {" "}{" "}
        <span onClick={() => handleDeleteTodo(id)}>x</span>
      </span>
    </div>
  );
};

export default Todo;
