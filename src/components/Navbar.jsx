import React from 'react'
import Logo from '../assets/Logo.svg'

const Navbar = () => {
  return (
    <div className='nav'>
      <img src={Logo} alt="" />
      <ul className='nav-list'>
        <li>Help</li>
        <li>|</li>
        <li>Sign In</li>
      </ul>
    </div>
  )
}

export default Navbar
