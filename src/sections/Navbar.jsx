import React from 'react'
import '../styles/nav.css'

function Navbar() {
  return (
    <>
    <div className='nav' >
        <ul className='navlinks'>
            <li ><a href='#hom' className='h'>HOME</a></li>
            <li><a href='#ab' className='a'>ABOUT</a></li>
            <li><a href='#sk' className='s'>SKILL</a></li>
            <li><a href='#pr' className='p'>PROJECTS</a></li>
            
        </ul>
    </div>
    
    </>
  )
}

export default Navbar