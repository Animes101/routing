import React from 'react'
import {NavLink } from 'react-router-dom'
import './navbar.css'

const NavBar = () => {
  return (
    <nav className='nav-bar'>
        <NavLink className='nav-link' to={'/'}>Home</NavLink>
        <NavLink className='nav-link' to={'/blogs'}>Blogs</NavLink>
        <NavLink className='nav-link' to={'/contact'}>Contact</NavLink>
        <NavLink className='nav-link' to={'/user'} >Users</NavLink>
        

    </nav>
  )
}

export default NavBar