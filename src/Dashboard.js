import React from 'react'
import Navbar from './Navbar'
import Sidenav from './Sidenav'
import Assignment from './Assignment'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <>
        <div>
            <Navbar/>
            <div className='d-flex justify-content-between align-items-center  flex'>
               <Sidenav/>
               <div className='w-75 h-100'>
                   <Outlet/>
               </div>
            </div>
        </div>
    </>
  )
}

export default Dashboard