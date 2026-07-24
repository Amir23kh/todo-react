import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
function Header() {
  const { todo } = useContext(TodoContext);
  return (
    <>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-slate-700 flex items-center gap-2">
          <i className="fas fa-list-check text-green-500 text-2xl"></i>
          <span>Todo List</span>
        </h1>
        <span className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium shadow-sm border border-green-200">
          <i className="fas fa-calendar-day mr-1"></i> {todo.length} count
        </span>
      </div>
    </>
  );
}
export default Header;
