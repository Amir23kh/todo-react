import TodoItem from "./TodoItem";

function TodoList({
  toggleTodo,
  setEditText,
  todo,
  editId,
  saveEdit,
  startEdit,
  removeTodo,
  editText,
  searchId,
}) {
  return (
    <>
      <ul className="space-y-3 max-h-80 overflow-y-auto pr-1 custom-scroll">
        {/* <!-- آیتم ۱ (انجام شده) --> */}
        {todo
          .filter((item) =>
            item.title.toLowerCase().includes(searchId.toLowerCase()),
          )
          .map((t, index) => {
            return (
              <TodoItem
                key={t.id}
                index={index}
                t={t}
                toggleTodo={toggleTodo}
                setEditText={setEditText}
                todo={todo}
                editId={editId}
                saveEdit={saveEdit}
                startEdit={startEdit}
                removeTodo={removeTodo}
              />
            );
          })}
      </ul>
    </>
  );
}
export default TodoList;
