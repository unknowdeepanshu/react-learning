import { IconEdit ,IconSquareRoundedCheck } from '@tabler/icons-react';
import { useState ,useContext } from 'react';
import TodoContext from "../context/todoContext";

export function List(props) {
    const [edit ,setedit] =useState(true)
    const [word ,setword] =useState(props.text)
    const { todo ,settodo }=useContext(TodoContext)
    const [complete ,setComplete] =useState(props.complete)
    const id=props.index-1
    function change(){
        setedit(false)
    }
    
    function done(){
        const nexdata=todo[id]
        nexdata.Task=word
        todo[id]=nexdata
        setedit(true)
    }
    return(
        <>
            <div 
            className={`h-16 flex gap-2 p-2 items-center border-[#9290C3] justify-between rounded-2xl border-[0.25rem] bg-[#535C91] ${complete?'opacity-25':''} `}
            >
                
                <span 
                className='text-[22px]'>
                    {props.index}
                </span>

                {edit?(<div 
                className={`w-[17rem] text-white ${complete?'line-through':''} `}
                >
                    {word}
                </div>):(
                <div
                className='flex '
                >
                    <input 
                    className='w-[17rem] text-white border-2 border-white p-[3px] rounded-2xl'
                    value={word}
                    onChange={(e)=>{setword(e.target.value)}}
                    />
                    <button onClick={done}>
                        <IconSquareRoundedCheck stroke={1.5} />
                    </button>
                </div>
                    )
                }
                {
                edit?(<div>
                    <button onClick={change}>
                        <IconEdit stroke={1.5} />
                    </button>
                </div>):(<div>
                </div>)
                }
                <input 
            type="checkbox"
            defaultChecked={complete}
            id='numberInput'
            onChange={(e)=>(
              setComplete((prev)=>!prev))
            }
            />
                
            </div>
        </>
    )
}