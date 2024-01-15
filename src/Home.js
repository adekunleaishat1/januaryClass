import React from 'react'
import './App.css'
import Navbar from './Navbar'
import image  from './AAYQAgSuAAgAAQAAAAAAABlvNp5yzndgSdCsu3q6Pw22qA.png'


const Home = () => {
  return (
    <div>
     <h1 className='math'>{Math.random()}</h1>
     <button className='btn btn-success'>click me</button>
     <i className='fa fa-user'></i>
     <img src={require('./AAYQAgSuAAgAAQAAAAAAABlvNp5yzndgSdCsu3q6Pw22qA.png')} alt="" />
     <img src={image} alt="" />
     <Navbar/>
    
    </div>
  )
}

export default Home