import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
function Search() {
  const { searchId, setSearchId } = useContext(TodoContext);
  return (
    <>
      <div className="flex items-center gap-2 bg-slate-100/70 p-1.5 rounded-2xl border border-slate-200/80 shadow-inner mb-5">
        <input
          value={searchId}
          onChange={(e) => setSearchId(e.target.value)}
          type="text"
          placeholder="Search tasks..."
          className="flex-1 bg-transparent px-4 py-2.5 text-slate-700 placeholder:text-slate-400 outline-none rounded-xl text-sm"
        />
      </div>
    </>
  );
}
export default Search;
