import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      todo: "this is todo",
      completed: false,
    },
  ],
  addtodo: (todo) => {},
  update: (id, todo) => {},
  deleteTodo: (id) => {},
  toggoleComplete: (id) => {},
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};
