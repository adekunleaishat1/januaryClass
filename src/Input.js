import React,{useState} from 'react'

const Input = () => {
    // let myname = "karleed"
    let gender = "male"
    const [myname, setmyname] = useState("karleed")
    const [list, setlist] = useState("")
    const [list2, setlist2] = useState("")
    const [lists, setlists] = useState([])
   // {conditonal expression? "true" : "false"}
   const [allstudent, setallstudent] = useState([
    {firstname:"tola", lastname:"adesanya"},
    {firstname:"bola", lastname:"adesanya"},
    {firstname:"tomi", lastname:"adesanya"}
   ])
   const change = () =>{
   
   let alllist = {
    list,
    list2
   }
   console.log(alllist);
   setlists([...lists, alllist])
    // setmyname(list) 
    console.log(lists);
   }
   console.log(list);
  return (
    <div>
      <h1>{gender == "male"? myname : ""}</h1> 
      <button onClick={change}>change name</button> 
      <table className='table border'>
        <tr>
            <td>S/N</td>
            <td>FIRSTNAME</td>
            <td>LASTNAME</td>
        </tr>
        {allstudent.map((el, index) =>(
            <>
             <tr>
                <td>{index + 1}</td>
                <td>{el.firstname}</td>
                <td>{el.lastname}</td>
             </tr>
            </>
        ))

        }
       </table>
       <input onChange={(e)=>setlist(e.target.value)} type="text" />
       <input onChange={(e)=>setlist2(e.target.value)} type="text" />
         
    </div>
  )
}

export default Input