import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Search from "./components/Search";

function App() {
  const [todo, setTodo] = useState(() => {
    const saved = localStorage.getItem("todos");
    return saved ? JSON.parse(saved) : [];
  });
  const [input, setInput] = useState("");
  const [editId, setEditId] = useState(null);
  const [editText, setEditText] = useState("");
  const [searchId, setSearchId] = useState("");
  const [priority, setPriority] = useState("High");
  const addTodo = () => {
    if (input.length === 0) {
      alert("لطفا یک کار وارد کنید!");
      return;
    }
    const add = [
      ...todo,
      { id: Date.now(), title: input, completed: false, priority: priority },
    ];
    setTodo(add);
    setInput("");
    setPriority("High");
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
          <Header todo={todo} />
          <Search searchId={searchId} setSearchId={setSearchId} />

          {/* فرم افزودن تسک جدید */}
          <TodoForm
            input={input}
            setInput={setInput}
            addTodo={addTodo}
            priority={priority}
            setPriority={setPriority}
          />

          {/* <!-- لیست تسک‌ها --> */}
          <TodoList
            toggleTodo={toggleTodo}
            setEditText={setEditText}
            todo={todo}
            editId={editId}
            saveEdit={saveEdit}
            startEdit={startEdit}
            removeTodo={removeTodo}
            editText={editText}
            searchId={searchId}
          />
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
