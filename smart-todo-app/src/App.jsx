import './index.css'
import { Todo } from './components/todo/todo'
import TodoContextProvider from './context/todoContextProvider'
function App() {

  return (
    <>
    <TodoContextProvider>    <div 
    className="h-screen text-white bg-[#070F2B] flex justify-center"
    >
      <Todo/>
    </div>
    </TodoContextProvider>
    </>
  )
}

export default App
