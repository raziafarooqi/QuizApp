import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import './Header.css'
function Header() {
  return (
    <div>
      <Link to="/" className='title'>Intuitive Quiz Hub</Link>
      
      <hr className="divider"/>
      <Outlet/>
    </div>
  )
}

export default Header
