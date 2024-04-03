import Todos from "./Todos";
import TodoForm from "./TodoForm";
import { useState } from "react";

const App = () => {
  // Main apni state ko app main rakhunga
  const [todos, setTodos] = useState([]);
  const handleAddTodos = (data) => {
    setTodos((prevState) => {
      return [...prevState, data];
    });
  };
  const handleDeleteTodoItem = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };
  const handleToggleTodo = (id) => {
    setTodos((prevState) =>
      todos.map((todo) => {
        if (todo.id === id) return { ...todo, completed: !todo.completed };
        else return todo;
      })
    );
  };
  return (
    <div className="container">
      <h1 className="main-title">Todo List</h1>
      <span >
        <TodoForm handleAddTodos={handleAddTodos} />
      </span>
      <Todos
        todos={todos}
        handleDeleteTodoItem={handleDeleteTodoItem}
        handleToggleTodo={handleToggleTodo}
      />
    </div>
  );
};

export default App;
