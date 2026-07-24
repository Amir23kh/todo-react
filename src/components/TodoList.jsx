import TodoItem from "./TodoItem";
import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
function TodoList({}) {
  const {
    toggleTodo,
    setEditText,
    todo,
    editId,
    saveEdit,
    startEdit,
    removeTodo,
    editText,
    searchId,
  } = useContext(TodoContext);
  return (
    <>
      <ul className="space-y-3 max-h-80 overflow-y-auto pr-1 custom-scroll">
        {/* <!-- آیتم ۱ (انجام شده) --> */}
        {todo
          .filter((item) =>
            item.title.toLowerCase().includes(searchId.toLowerCase()),
          )
          .map((todo, index) => {
            return <TodoItem key={todo.id} todo={todo} index={index} />;
          })}
      </ul>
    </>
  );
}
export default TodoList;
