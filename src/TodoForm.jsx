import { useState } from "react";
import { v4 as uuid } from "uuid";

const TodoForm = ({handleAddTodos}) => {
  const [todo, setTodo] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();
    handleAddTodos({id: uuid(), title: todo, completed: false})
    setTodo("");
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
