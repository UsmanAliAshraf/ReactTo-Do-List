import React, { useState } from 'react'

function App() {
  const[title,setTitle]=useState("");
  const[desc,setDesc]=useState("");
  const[mainTask,setMainTask]=useState([]);
  const SubmitHandler = (e)=>{

    e.preventDefault();

    setMainTask([...mainTask,{title,desc}]);
    setTitle("");
    setDesc("");
  }
  const DeleteHandler =(i)=>{
    let copyTask=[...mainTask];
    copyTask.splice(i,1);
    setMainTask(copyTask);
  }
  let renderTask="No Task Available!";
  if(mainTask.length>0){

    renderTask=mainTask.map((t,i)=>{
      return (
        <li key={i} className='flex items-center justify-around '>
        <div className='flex justify-between mb-2 w-2/3'>
          <h5 className='font-semibold text-2xl'>{t.title}</h5>
          <h5 className='font-semibold text-xl'>{t.desc}</h5>
          <button onClick={()=>{DeleteHandler(i)}} className='p-2 bg-red-500 rounded text-zinc-200 text-xl'>Delete</button>
        </div>
        </li>
      )
    })
  }
  return (

    <div>
      <h1 className='bg-zinc-900 py-5 text-center text-zinc-100 text-6xl font-bold'>My ToDo List</h1>

      <form onSubmit={SubmitHandler} >

        <input type="text" placeholder='Enter Task here...' className='border-2 border-zinc-600 rounded m-10 text-2xl px-3 py-2'
        value={title}
        onChange={(e)=>{
         setTitle(e.target.value);
         }} />
         <br />
        <input type="text" placeholder='Enter Description here...' className='border-2 border-zinc-600 rounded m-10 text-2xl px-3 py-2'
          value={desc}
          onChange={(e)=>{
            setDesc(e.target.value);
          }} />
        <button className='text-white bg-black rounded px-5 text-2xl py-2 mr-5 font-semibold'>Add Task</button>

      </form>
      <hr />
      <div className='p-8 bg-slate-200'>
          <ul>
            {renderTask}
          </ul>
      </div>
    </div>
  )
}

export default App
