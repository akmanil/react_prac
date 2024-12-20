import React from 'react'
import { Outlet ,Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul>
        <Link to = "/">Home</Link>
        <Link to = "/about">About</Link>
        <Link to = "/contact">Contact</Link>
      </ul>
      <Outlet />
      {/* outlet stored which page will be render */}
    </div>
    
  )
}

export default Navbar
