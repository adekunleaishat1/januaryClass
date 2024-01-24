import React,{useEffect, useState} from 'react'
import axios from 'axios'

const Http = () => {
    const [data, setdata] = useState([])
    useEffect(() => {
    //    fetch("https://dummyjson.com/products")
    //    .then(res=> res.json())
    //    .then(data=> console.log(data.products))

       axios.get("https://dummyjson.com/products")
       .then((res)=>{
        console.log(res.data.products)
        setdata(res.data.products)
        console.log(data);
       }).catch((err)=>{
        console.log(err);
       })
    }, [])
    
  return (
    <div>
        {data.map((el)=>(
            <>
            <div>
                {el.description}
            </div>
            {el.images.map((el)=>(
                <>
                <img src={el} alt="" />
                </>
            ))
            }
            </>
        ))

        }
    </div>
  )
}

export default Http