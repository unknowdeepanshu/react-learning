import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todo/todoSlice";

function AddTodo() {
  const [input, setInput] = useState(" ");
  const dispatch = useDispatch();
  const addTodoHandler = (e) => {
    e.preventDefault();
    dispatch(addTodo(input));
    setInput(" ");
  };
  return (
    <>
      <div className="flex-1 self-center">
        <form onSubmit={addTodoHandler} className="mt-12 space-x-3">
          <input
            type="text"
            className="rounded border border-gray-700 bg-gray-800 px-3 py-1 text-base leading-8 text-gray-100 transition-colors duration-200 ease-in-out outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900"
            placeholder="Enter a Todo..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            type="submit"
            className="rounded border-0 bg-indigo-500 px-6 py-2 text-lg text-white hover:bg-indigo-600 focus:outline-none"
          >
            Add Todo
          </button>
        </form>
      </div>
    </>
  );
}

export default AddTodo;
