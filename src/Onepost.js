import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
const Onepost = () => {
    const {id, i} = useParams()
    const [post, setpost] = useState()
    useEffect(() => {
        axios.get(`http://localhost:4567/post/${id}`)
        .then((res)=>{
           console.log(res.data);
           setpost(res.data)
           console.log(post);
        //    setdata(res.data)
        }).catch((err)=>{
           console.log(err);
        })
    }, [])
    
  return (
    <div>
        <h1>{post.content}</h1>
        <h1>{post.title}</h1>
        <img src={post.image} alt="" />
    </div>
  )
}

export default Onepost