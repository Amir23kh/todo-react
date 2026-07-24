import { createContext, useEffect, useState } from "react";
export const TodoContext = createContext();
export function TodoProvider({ children }) {
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
      alert("please enter a task!");
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
  const startEdit = (id, title, priority) => {
    setEditId(id);
    setEditText(title);
    setPriority(priority);
  };
  const saveEdit = () => {
    const update = todo.map((item) => {
      if (item.id === editId) {
        return {
          ...item,
          title: editText,
          priority: priority,
        };
      } else {
        return item;
      }
    });
    setTodo(update);
    setEditId(null);
    setEditText("");
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todo));
  }, [todo]);
  return (
    <TodoContext.Provider
      value={{
        todo,
        addTodo,
        setTodo,
        input,
        setInput,
        editId,
        setEditId,
        editText,
        setEditText,
        searchId,
        setSearchId,
        priority,
        setPriority,
        removeTodo,
        toggleTodo,
        startEdit,
        saveEdit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}
