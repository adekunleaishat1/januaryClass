import React from 'react'
import Navbar from './Navbar'
import Sidenav from './Sidenav'

const Dashboard = () => {
  return (
    <>
        <div>
            <Navbar/>
            <div className='d-flex justify-content-between align-items-center  flex'>
               <Sidenav/>
               <div className='w-75 h-100'>
                  <h1>working</h1>
               </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard