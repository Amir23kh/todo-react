function TodoItem({
  t,
  index,
  toggleTodo,
  setEditText,
  editId,
  saveEdit,
  startEdit,
  removeTodo,
  editText,
}) {
  return (
    <>
      <li
        key={t.id}
        className="group flex items-center justify-between bg-white p-3.5 rounded-2xl shadow-sm border border-slate-200/70 hover:shadow-md transition-all duration-200"
      >
        <div className="flex items-center gap-3">
          <button
            onClick={() => toggleTodo(index)}
            className={`w-6 h-6 rounded-full border-2 border-green-400 bg-green-50 ${t.completed ? "bg-green-300" : ""} flex items-center justify-center text-green-600 hover:bg-green-100 transition-colors`}
          ></button>
          {editId === t.id ? (
            <input
              className="border rounded px-2"
              value={editText}
              onChange={(e) => setEditText(e.target.value)}
            />
          ) : (
            <span
              className={`text-slate-700 ${t.completed ? "line-through decoration-slate-400/70" : ""} text-sm`}
            >
              {t.title}
            </span>
          )}
        </div>
        <div className="flex items-center gap-3">
          {editId === t.id ? (
            <button
              onClick={() => saveEdit()}
              className="text-slate-300 hover:text-red-500 transition-colors duration-200 opacity-60 group-hover:opacity-100"
            >
              <i className="fas fa-edite">💾</i>
            </button>
          ) : (
            <button
              onClick={() => startEdit(t.id, t.title)}
              className="text-slate-300 hover:text-red-500 transition-colors duration-200 opacity-60 group-hover:opacity-100"
            >
              <i className="fas fa-edite">✏️</i>
            </button>
          )}
          <button
            onClick={() => removeTodo(index)}
            className="text-slate-300 hover:text-red-500 transition-colors duration-200 opacity-60 group-hover:opacity-100"
          >
            <i className="fas fa-trash-can">❌</i>
          </button>
        </div>
      </li>
    </>
  );
}
export default TodoItem;
