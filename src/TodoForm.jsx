import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { v4 as uuid } from "uuid";

const TodoForm = ({ handleAddTodos }) => {
  const [todo, setTodo] = useState("");
  const handleAddTodo = (e) => {
    e.preventDefault();
    if (todo.trim() === "") {
      toast.error("Please enter something !!!");
    } else {
      handleAddTodos({ id: uuid(), title: todo, completed: false });
    }
    setTodo("");
  };
  return (
    <form onSubmit={handleAddTodo} className="todoForm">
      <input
        className="todoForm__input"
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button type="submit" className="todoForm__btn">
        Add
      </button>
        <Toaster position="top-center" reverseOrder={false} />
      {
        // Type submit kar raha hu taki ENTER button hit karne par main chahta hu ki form automatically submit ho jae
      }
    </form>
  );
};

export default TodoForm;
