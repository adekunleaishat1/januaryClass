import React from 'react'
import mystyle from './Styl/Mystyle'
import Home from './Home'
import Navbar from './Navbar'
import Input from './Input'

const App = () => {
  return (
    <div>
      {/* <h1 style={{color:"black", backgroundColor:"green"}}>App</h1>
      <p style={mystyle.header}>new class</p>
      <p style={mystyle.nav}>Another</p> */}
      {/* <Home/> */}
      <Navbar/>
      <Input/>
    </div>
  )
}

export default App