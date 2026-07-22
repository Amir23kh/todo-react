import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const addTodo = () => {
    if (input.length === 0) {
      alert("لطفا یک کار وارد کنید!");
      return;
    }
    const add = [...todo, { id: Date.now(), title: input, completed: false }];
    setTodo(add);
    setInput("");
  };
  const removeTodo = (index) => {
    const remove = [...todo];
    remove.splice(index, 1);
    setTodo(remove);
  };
  const toggleTodo = (index) => {
    const toggle = todo.map((item, i) =>
      i === index ? { ...item, completed: !item.completed } : item,
    );

    setTodo(toggle);
  };
  const startEdit = (id, title) => {
    setEditId(id);
    setEditText(title);
    console.log("edited");
  };
  const saveEdit = () => {
    const update = todo.map((item) => {
      if (item.id === editId) {
        return {
          ...item,
          title: editText,
        };
      } else {
        return item;
      }
    });
    setTodo(update);
    setEditId(null);
    setEditText("");
  };
  const clearAll = () => {
    if (window.confirm("آیا از پاک کردن همه کارها مطمئن هستید؟")) {
      setTodo([]);
    }
  };
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
  return (
    <>
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center justify-center p-4 font-sans">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-200/60 p-6 border border-white/40 transition-all duration-300 hover:shadow-blue-300/40">
          <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold text-slate-700 flex items-center gap-2">
              <i className="fas fa-list-check text-green-500 text-2xl"></i>
              <span>کارهای امروز</span>
            </h1>
            <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium shadow-sm border border-green-200">
              <i className="fas fa-calendar-day mr-1"></i> {todo.length} مورد
            </span>
          </div>

          {/* فرم افزودن تسک جدید */}
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

          {/* <!-- لیست تسک‌ها --> */}
          <ul className="space-y-3 max-h-80 overflow-y-auto pr-1 custom-scroll">
            {/* <!-- آیتم ۱ (انجام شده) --> */}
            {todo.map((t, index) => {
              return (
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
              );
            })}
          </ul>
          <div className=" mt-2 flex items-center justify-center">
            <button
              onClick={() => clearAll()}
              className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-md shadow-red-300/40 text-sm font-medium"
            >
              <i className="fas fa-trash-can"></i>
              <span>پاک کردن همه</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
