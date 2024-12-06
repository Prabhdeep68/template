import React from 'react'
import "./navbar.css";

const Navbar = () => {
  return (
    <>
    <nav className='hero'>
        <div className='container'>
        <div className='logo'><h1>
            Easy</h1>
        </div>
        
            <ul className='nav-links'>
                <li><a href='#'>Home</a></li>
                <li><a href='#'>Dropdown</a></li>
                <li><a href='#'>Inner Page</a></li>
                <li><a href='#'>Contact Us</a></li>
               
            </ul>
        
        
            <button>Free templates</button>
            </div>
        
    </nav>
    
  
    </>
  )
}

export default Navbar;