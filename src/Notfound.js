import React from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
    const navigate = useNavigate()
    const goback = () =>{
        navigate('/')
    }
  return (
    <div>
        <div>
            <h1>Page not found</h1>
            <button onClick={goback} className='btn  btn-danger'>Go back home</button>
        </div>
    </div>
  )
}

export default Notfound