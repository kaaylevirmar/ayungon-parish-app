import React from 'react'
import { Link } from 'react-router-dom';
import '../css/sidebar.css'

const Sidebar = () => {
  return (
    <div className='sidebar flex flex-col  text-center'>
      <div>
        Logo
      </div>
      <div className=' pt-20 navlink'>

      <ul>
        <li><Link to='/dashboard'>Dashboard</Link></li>
        <li><Link to='/schedule'>Schedule</Link></li>
        <li><Link to='/mass-intentions'>Mass Intentions</Link></li>
      </ul>

      </div>
    </div>
  )
}

export default Sidebar
