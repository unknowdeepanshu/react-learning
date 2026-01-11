// import todo from "../../table"
import { Add } from "../add"
import { List } from "../list"
import TodoContext from "../../context/todoContext"
import { useContext } from "react"

export function Todo(){
    const { todo }=useContext(TodoContext)

    return(
        <>
        <div
        className="flex flex-col gap-4 bg-[#1B1A55] p-8 relative top-[23px] rounded-2xl h-[29rem]  scrollbar-thumb-sky-700 scrollbar-track-sky-300 "
        >
            <Add/>
            <div
            className="flex flex-col gap-2 scrollbar-thin"
            style={{overflow:"auto",scrollbarColor:'white #1B1A55' }}
            >
                {todo.map((todo) => (
                    <List
                        key={todo.id}
                        index={todo.id}
                        text={todo.Task}
                        complete={todo.complete}
                    />
                ))}
            </div>
        </div>
            
        </>
    )
}