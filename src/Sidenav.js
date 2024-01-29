import React from 'react'
import { Link } from 'react-router-dom'

const Sidenav = () => {
  return (
    <div>
        <div className='side'>
            <ul className='p-4'>
               <Link to="/student/profile" className='p-4'>Profile</Link>
               <Link className='p-4'>password</Link>
            </ul>
        </div>
    </div>
  )
}

export default Sidenav