import React from 'react'
import '../styles/about.css'
import resume from '../uploads/resume.jpg'

function About() {
    return (
        <>

            <div className='divider-section1' id='ab'>
                <div className='divider1' ></div>
                <div className='divider-center'>
                    <h2 className='about-text' >ABOUT</h2>
                </div>
                <div className='divider2' ></div>
            </div>
            



            <div className="container-about">

                <div className='resume-img'>
                    <img alt="" src={resume} width={"100%"} />

                </div>
                <div className='name'>
                    <h2 className='hi'>About me</h2>

                    <p>As a dedicated full-stack developer, I thrive on crafting dynamic and user-centric web solutions that push  <br />the boundaries of technology. 
                       I have honed my skills in both front-end and back-end development, <br />allowing me to create seamless and responsive applications from concept to deployment. <br /><br />
                       
                       In addition to technical proficiency, I am also committed to delivering high-quality solutions that meet the <br /> unique needs of each project. I thrive in 
                       collaborative environments, where I can leverage my communication <br /> and problem-solving skills to work effectively within interdisciplinary teams.
                       Above all, I am driven by a desire<br />to innovate and contribute to the advancement of web technology. Whether it's optimizing performance, <br /> enhancing user 
                       experience, or implementing cutting-edge features, I approach every project with creativity, <br /> diligence, and a relentless pursuit of excellence</p>

                </div>
            </div>

        </>
    )
}

export default About