function TodoForm({ input, setInput, addTodo }) {
  return (
    <>
      <div className="flex items-center gap-2 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/80 shadow-inner mb-5">
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          type="text"
          placeholder="افزودن کار جدید ..."
          className="flex-1 bg-transparent px-4 py-2.5 text-slate-700 placeholder:text-slate-400 outline-none rounded-xl text-sm"
        />
        <button
          onClick={() => addTodo()}
          className="bg-green-600 hover:bg-green-700 text-white px-5 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-md shadow-green-300/40 text-sm font-medium"
        >
          <i className="fas fa-plus"></i>
          <span>افزودن</span>
        </button>
      </div>
    </>
  );
}
export default TodoForm;
