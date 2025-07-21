import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <NavLink className='nav-link' to={'/'}>Home</NavLink>
        <NavLink className='nav-link' to={'/blogs'}>Blogs</NavLink>
        <NavLink className='nav-link' to={'/contact'}>Contact</NavLink>
        

    </nav>
  )
}

export default NavBar