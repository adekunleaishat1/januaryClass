import React, { useState } from 'react'

const Addtodo = ({click}) => {
    const [newtodo, setnewtodo] = useState("")
  return (
    <div>
        <input onChange={(e)=>setnewtodo(e.target.value)} type="text" />
         <button onClick={()=>click(newtodo)}>addtodo</button>
    </div>
  )
}

export default Addtodo