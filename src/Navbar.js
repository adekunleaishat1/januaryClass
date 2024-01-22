import Addtodo from "./Addtodo"
import React, { useState } from "react"
import Disptodo from "./Disptodo"

const Navbar = () =>{
  const [alltodo, setalltodo] = useState([])
  const addtodo = (newtodo) =>{
    console.log("working");
   
    setalltodo([...alltodo, newtodo])
    console.log(alltodo);
  }
    return(
        <>
          <div>Navbar</div>
          <div></div>
          <Addtodo click={addtodo}/>
          <Disptodo alltodo={alltodo}/>

        </>
    )
}

export default Navbar