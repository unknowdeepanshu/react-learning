import { useState ,useContext} from "react"
import TodoContext from "../context/todoContext"

export function Add(){
    const [task,settask]=useState('')
    const { todo,settodo }=useContext(TodoContext)
    const [word ,setword]=useState("Add the todo")

    function Submit(){
        if(task==''){
            setword("This empty")
            setTimeout(()=>{
                setword("Add the todo")
            },2000)
        }else{
            const data={
            id:todo.length+1,
            Task:task,
            complete:false
        }
        settodo(prev => [...prev, data]);
        console.log(todo)
        }

        
        
    }


    return(
        <>
        <div 
        className="h-16 flex gap-2 p-2 justify-center bg-[#535C91] rounded-2xl border-[0.25rem] border-[#9290C3]"
        >
           <div
           className="flex justify-center"
           >
                <input
                type="text"
                className="border-1 border-white rounded-l-lg py-0.5 p-2 "
                placeholder={word}
                onChange={(e)=>settask(e.target.value)}
                />
                <button
                className="outline-none bg-amber-300 px-3 py-0.5 shrink-0 rounded-r-lg"
                onClick={Submit}
                ><span>ADD</span></button>
           </div>
        </div>
        </>
    )
}