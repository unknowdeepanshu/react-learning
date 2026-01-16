import { useState } from "react";
import { useTodo } from "../context";

function TodoForm() {
  const [todo, setTodo] = useState("");

  const { addtodo } = useTodo();

  const add = (e) => {
    e.preventDefault();
    if (!todo) return;
    addtodo({ todo, completed: false });
    setTodo("");
  };

  return (
    <form className="flex" onSubmit={add}>
      <input
        type="text"
        placeholder="Write Todo..."
        className="w-full rounded-l-lg border border-black/10 bg-white/20 px-3 py-1.5 duration-150 outline-none"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="submit"
        className="shrink-0 rounded-r-lg bg-green-600 px-3 py-1 text-white"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;
