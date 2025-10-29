
import { useState } from 'react'
import './App.css'

function App() {
  
  const[color,setColor] = useState("olive")
  return (
    <>
      
      <div className='w-full h-screen duration-200' style={{background : color}}>
        <div className='flex flex-wrap justify-center fixed gap-12 bottom-12 inset-x-0  '>
        <div className='flex flex-wrap bg-white rounded-2xl gap-6 px-3 py-1'>
          
            <button onClick={()=>setColor("red")} className='rounded-full outline-none py-1 px-3 shadow-lg text-white' style={{background:"red"}}>Red</button>
            <button onClick={()=>setColor("orange")} className='rounded-full outline-none py-1 px-3 shadow-lg text-white' style={{background:"orange"}}>Orange</button>
            <button onClick={()=>setColor("Green")} className='rounded-full outline-none py-1 px-3 shadow-lg text-white' style={{background:"green"}}>Green</button>
            <button onClick={()=>setColor("Violet")} className='rounded-full outline-none py-1 px-3 shadow-lg text-white' style={{background:"violet"}}>Violet</button>
            <button onClick={()=>setColor("purple")} className='rounded-full outline-none py-1 px-3 shadow-lg text-white' style={{background:"purple"}}>Purple</button>
            <button onClick={()=>setColor("pink")} className='rounded-full outline-none py-1 px-3 shadow-lg text-white' style={{background:"pink"}}>Pink</button>
            <button onClick={()=>setColor("white")} className='rounded-full outline-none py-1 px-3 shadow-lg text-black' style={{background:"white"}}>White</button>
            <button onClick={()=>setColor("black")} className='rounded-full outline-none py-1 px-3 shadow-lg text-white' style={{background:"black"}}>Black</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
