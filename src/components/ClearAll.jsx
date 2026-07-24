import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
function ClearAll() {
  const { setTodo } = useContext(TodoContext);
  const clear = () => {
    if (window.confirm("آیا از پاک کردن همه کارها مطمئن هستید؟")) {
      setTodo([]);
    }
  };

  return (
    <div className=" mt-2 flex items-center justify-center">
      <button
        onClick={() => clear()}
        className="bg-red-600 hover:bg-red-700 text-white px-5 py-2.5 rounded-xl transition-all duration-200 flex items-center gap-2 shadow-md shadow-red-300/40 text-sm font-medium"
      >
        <i className="fas fa-trash-can"></i>
        <span>Clear All</span>
      </button>
    </div>
  );
}
export default ClearAll;
