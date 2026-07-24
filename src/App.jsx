import { useEffect, useState } from "react";
import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import Search from "./components/Search";

import { TodoProvider } from "./context/TodoContext";
import ClearAll from "./components/ClearAll";

function App() {
  return (
    <TodoProvider>
      <div className="bg-gradient-to-br from-slate-50 to-blue-50 min-h-screen flex items-center justify-center p-4 font-sans">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl shadow-blue-200/60 p-6 border border-white/40 transition-all duration-300 hover:shadow-blue-300/40">
          <Header />
          <Search />

          {/* فرم افزودن تسک جدید */}
          <TodoForm />

          {/* <!-- لیست تسک‌ها --> */}
          <TodoList />
          <ClearAll />
        </div>
      </div>
    </TodoProvider>
  );
}

export default App;
