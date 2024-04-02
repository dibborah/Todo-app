import { useState } from "react";

const TodoForm = ({handleAddTodos}) => {
  const [todo, setTodo] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();
    handleAddTodos(todo)
    setTodo("");
    console.log("Todo Added");
  };
  return (
    <div>
      <form onSubmit={handleAddTodo}>
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button type="submit">Add</button>
      {
        // Type submit kar raha hu taki ENTER button hit karne par main chahta hu ki form automatically submit ho jae
      }
      </form>
    </div>
  );
};

export default TodoForm;
