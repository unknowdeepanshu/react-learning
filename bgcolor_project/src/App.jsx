import { useState } from 'react'
import './App.css'

function App() {
  const [color, setcolor] = useState('olive')

  return (
    <>
     <div className='w-full h-screen duration-200'
     style={{background:color}}
     >
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl p-2'>
          <button 
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor:'red'}}
          onClick={()=>setcolor('red')}
          >
            Red
          </button>
          <button 
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor:'yellow'}}
          onClick={()=>setcolor('yellow')}

          >
            Yellow
          </button>
          <button 
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor:'brown'}}
          onClick={()=>setcolor('brown')}
          >
            Brown
          </button>
          <button 
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor:'purple'}}
          onClick={()=>setcolor('purple')}
          >
            Purple
          </button>
          <button 
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor:'black'}}
          onClick={()=>setcolor('black')}
          >
            Black
          </button>
          
          <button 
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor:'green'}}
          onClick={()=>setcolor('green')}
          >
            Green
          </button>
          <button 
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor:'pink'}}
          onClick={()=>setcolor('pink')}
          >
            Pink
          </button>
          <button 
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor:'blue'}}
          onClick={()=>setcolor('blue')}
          >
            Blue
          </button>
          <button 
          className='outline-none px-4 rounded-full py-1 text-white shadow-lg'
          style={{backgroundColor:'gray'}}
          onClick={()=>setcolor('gray')}
          >
            Gray
          </button>
          <button 
          className='outline-none px-4 rounded-full py-1 text-black shadow-lg'
          style={{backgroundColor:'lavender'}}
          onClick={()=>setcolor('lavender')}
          >
            Lavendar
          </button>
          <button 
          className='outline-none px-4 rounded-full py-1 text-black shadow-lg'
          style={{backgroundColor:'white'}}
          onClick={()=>setcolor('white')}
          >
            White
          </button>
        </div>
      </div>

     </div>
    </>
  )
}

export default App
