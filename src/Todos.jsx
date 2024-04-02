import Todo from "./Todo";

const Todos = ({ todos, handleDeleteTodoItem, handleToggleTodo }) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <Todo
            {...todo}
            key={todo.id}
            handleDeleteTodoItem={handleDeleteTodoItem}
            handleToggleTodo={handleToggleTodo}
          />
        );
      })}
    </div>
  );
};

export default Todos;
