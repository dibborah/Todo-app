import Todo from "./Todo";

const Todos = ({ todos, handleDeleteTodoItem }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            {...todo}
            key={todo.id}
            handleDeleteTodoItem={handleDeleteTodoItem}
          />
        );
      })}
    </div>
  );
};

export default Todos;
