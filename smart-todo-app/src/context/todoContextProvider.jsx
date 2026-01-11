import React from "react";
import TodoContext from "./todoContext";

const TodoContextProvider = ({children})=>{
    const [todo,settodo]=React.useState([])
    return(
        <TodoContext.Provider value={{todo, settodo}}>
            {children}
        </TodoContext.Provider>
    )
}
export default TodoContextProvider