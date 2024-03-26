import React from 'react'
import navbar from './navbar.css'

const Navbar = () => {
  return (
    <>
    <nav className='nav-item'>
        <div className='logo'>
            <h2><span>E</span>xcavate <span>R</span>esearch</h2> </div>
            <div className='menu-link'>
                <ul>
                    <li><a>About us</a></li>
                    <li><a>Our People</a></li>
                    <li><a>A Helping hand</a></li>
                    <li><a>Contact us</a></li>
                    <li><a>Privacy Policy</a></li>
                </ul>
            </div>
    </nav>
    <p><h1>Home</h1>
    <br></br>
    <h2>What we offer</h2></p>
        
    </>
  )
}

export default Navbar