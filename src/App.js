import Todos from "./Todos";
import TodoForm from "./TodoForm";
import { useState } from "react";

const App = () => {
  // Main apni state ko app main rakhunga
  const [todos, setTodos] = useState([
    { id: 1, title: "Learn React", completed: false },
    { id: 2, title: "Learn Javascript", completed: true },
    { id: 3, title: "Learn CSS", completed: false },
  ]);
  const handleAddTodos = (data) => {
    setTodos((prevState) => {
      return [...prevState, data];
    });
  };
  const handleDeleteTodoItem = (id) => {
    setTodos((prevState) => prevState.filter((todo) => todo.id !== id));
  };
  return (
    <div>
      <h1 className="main-title">TodoList</h1>
      <TodoForm handleAddTodos={handleAddTodos} />
      <Todos todos={todos} handleDeleteTodoItem={handleDeleteTodoItem} />
    </div>
  );
};

export default App;
