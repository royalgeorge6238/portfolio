import React from 'react'
import profile from '../uploads/royal.JPG'
import '../styles/home.css'
import resume from '../uploads/resume1.pdf'
import Button from 'react-bootstrap/Button';



function Home() {
  return (
    <>

      <div className="container" id='hom' >
        

        <div className='img'>
          <img src={profile} alt="" width={"100%"} />

        </div>
        <div className='name'>
          <h2 className='hi'>I'M <span style={{color:"yellow", fontWeight:"bold"}} >ROYAL GEORGE</span></h2>
          <h1>Full Stack Developer</h1>
          <p>Hi there! I'm Royal George, a passionate and versatile full-stack developer with a keen eye for <br />
          detail and a knack for problem-solving. I've had the privilege of working on a diverse range of <br />
          projects, from responsive web applications to complex e-commerce platforms.Committed to staying <br />
          abreast of emerging technologies and best practices, I'm always eager to expand my skill set and <br />
          embrace new challenges in pursuit of excellence.</p>
          <a href={resume} download='resume'><Button className='tra' variant="primary">Download Resume</Button></a>

          
          


          

        </div>
      </div>
    </>



  )
}

export default Home