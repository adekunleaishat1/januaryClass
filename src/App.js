import React from 'react'
import mystyle from './Styl/Mystyle'
import Home from './Home'
import Navbar from './Navbar'
import Input from './Input'
import Assignment from './Assignment'

const App = () => {
  return (
    <div>
      {/* <h1 style={{color:"black", backgroundColor:"green"}}>App</h1>
      <p style={mystyle.header}>new class</p>
      <p style={mystyle.nav}>Another</p> */}
      {/* <Home/> */}
      <Navbar/>
      <Input/>
      {/* <Assignment/> */}
    </div>
  )
}

export default App