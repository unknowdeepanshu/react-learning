import { useState , useEffect, useCallback ,useRef} from 'react'
import './App.css'
function App() {
  const [length ,setlenght]=useState(8)
  const [charAllow,setcharAllow] =useState(false)
  const [numberAllow,setnumberAllow]=useState(false)
  const [password,setpassword]=useState("")

  //useRef hook
  const passwordref=useRef(null)
  const passwordgenrator= useCallback(()=>{
    let pass=''
    let str='ABCDEFGHIJKLMNOPQRSTVWXYZabcdefghijklmnopqrstvwxyz'
    if(numberAllow) str+='0123456789'
    if(charAllow) str+="!@#$%^&*()-_=+[{]};:,<.>/?\|~'"
    for(let i=0;i<=length;i++){
      let char=Math.floor(Math.random() * str.length +1)
      pass+=str.charAt(char)
    }
    setpassword(pass)
  },[numberAllow,charAllow,setpassword,length])
  const copyclipboard =useCallback(()=>{
    passwordref.current?.select()
    window.navigator.clipboard.writeText(password)
  },[password])
  useEffect(()=>{
    passwordgenrator()
  },[length,charAllow,numberAllow,passwordgenrator])
  return (
    <>
    <div
    className='h-screen bg-black flex justify-center'
    >
      <div 
      className='h-28 w-{12rem} rounded-2xl bg-gray-600 fixed top-8 flex p-5 flex-col gap-4'

      >
        <div 
        className='items-center flex '
        >
          <input 
          type='text'
          className='bg-white rounded-l-lg py-0.5 p-2 '
          style={{width:'20rem'}}
          value={password}
          placeholder='password'
          readOnly
          ref={passwordref}
          />
          <button
          onClick={copyclipboard}
          className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0 rounded-r-lg'
          ><span>copy</span></button>
        </div>
        <div 
        className='flex gap-4'
        >
          <div
          className='flex felx-col gap-2'
          >    
            <input
            type='range'
            min={8}
            max={100}
            value={length}
            onChange={(e)=>(setlenght(e.target.value))}
            />
            <span>Length:{length}</span>
            
          </div>
          <div
          className='flex felx-col gap-2'
          >
            <input 
            type="checkbox"
            defaultChecked={numberAllow}
            id='numberInput'
            onChange={(e)=>(
              setnumberAllow((prev)=>!prev))
            }
            />
            <sapn>Number</sapn>
          </div>
          <div
          className='flex felx-col gap-2'
          >
            <input 
            type="checkbox"
            defaultChecked={charAllow}
            id='numberInput'
            onChange={(e)=>(
              setcharAllow((prev)=>!prev))
            }
            />
            <sapn
            className=''
            >Characters</sapn>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
