import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Posts = () => {
    const [content, setcontent] = useState("")
    const [title, settitle] = useState("")
    const [image, setimage] = useState("")
    const [data, setdata] = useState([])
    const [showing, setshowing] = useState(false)
    // const [id, setid] = useState('')
    
    const navigate = useNavigate()

    useEffect(() => {
        axios.get("http://localhost:4567/post")
        .then((res)=>{
        //    console.log(res.data);
           setdata(res.data)
        }).catch((err)=>{
           console.log(err);
        })
    }, [data])
    
    const post  =() =>{
        console.log(content, title);
     axios.post("http://localhost:4567/post",{content, title, image})
     .then((res)=>{
        console.log(res);
     }).catch((err)=>{
        console.log(err);
     })
    }

    const choosefile = (e) =>{
       const file = e.target.files[0]
       console.log(file);
       const reader = new FileReader()
       reader.readAsDataURL(file)
       reader.onload = () =>{
        setimage(reader.result)
          console.log(reader.result);
       }
    }

    const show = () =>{
    //   {showing? setshowing(false) : setshowing(true)}
      setshowing(!showing)
    }
    const showmore =(el) =>{
        // setid(el.id)
        const i = 2
        const id = el.id
        navigate(`/onepost/${id}/${i}`)
    }
  return (
    <div>
        <div className='w-50 mx-auto form-group'>
            <h1 className='text-center text-muted'>Form</h1>
        <input className='form-control mt-3' onChange={(e)=>setcontent(e.target.value)} type='text'/>
        <div>
        <input className='form-control mt-3' onChange={(e)=>settitle(e.target.value)} type={showing?  "password" : "text"}/>
        <button onClick={show}>{showing?   "hide" : "show"}</button>
        </div>
      
        <input onChange={(e)=>choosefile(e)} type="file" />
        <button onClick={post} className='btn btn-primary'>post</button>
        </div>

        {
            data.map((el, id)=>(
                <>
                <div key={id}>
                    <h1>{el.title}</h1>
                    <h1>{el.content}</h1>
                    <button onClick={()=>showmore(el)}>show more ...</button>
                    {/* <img src={el.image} alt="" /> */}
                </div>
                </>
            ))
        }
       
    </div>
  )
}

export default Posts