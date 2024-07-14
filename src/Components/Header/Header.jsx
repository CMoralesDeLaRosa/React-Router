import React from 'react'
import { NavLink } from 'react-router-dom'
import './Header.css'

const Header = () => {
  return (
    <header
      className='flex-direction'
      style={{ height: '100px', width: '100%' }}
    >
      <nav className='flex-direction'>
        <ul className='flex-direction' style={{ gap: '300px' }}>
          <li>
            <NavLink activeClassName='active' className='nav-link' to=''>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' className='nav-link' to='contact'>
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' className='nav-link' to='about'>
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
