import React, { useState } from 'react'

function App() {
  const[title,setTitle]=useState("");
  const[desc,setDesc]=useState("");

  return (

    <div>
      <h1 className='bg-zinc-900 py-5 text-center text-zinc-100 text-6xl font-bold'>My ToDo List</h1>

      <form >

        <input type="text" placeholder='Enter Task here...' className='border-2 border-zinc-600 rounded m-10 text-2xl px-3 py-2'
        value={title}
        onChange={(e)=>{
         setTitle(e.target.value);
         }} />
        <input type="text" placeholder='Enter Description here...' className='border-2 border-zinc-600 rounded m-10 text-2xl px-3 py-2'
          value={desc}
          onChange={()=>{
            setDesc(e.target.value);
          }} />
        <button className='text-white bg-black rounded px-5 text-2xl py-2 mr-5 font-semibold'>Add Task</button>

      </form>
    </div>
  )
}

export default App
