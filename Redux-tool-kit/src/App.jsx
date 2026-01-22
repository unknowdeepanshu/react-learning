import AddTodo from "./components/Addtodo";
import Todos from "./components/Todo";

function App() {
  return (
    <>
      <div className="flex w-full flex-col px-44">
        <AddTodo />
        <Todos />
      </div>
    </>
  );
}

export default App;
