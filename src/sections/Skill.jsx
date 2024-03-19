import React from 'react'
import '../styles/skill.css'
import skillImg from '../uploads/workingman.png'

function Skill() {
  return (
    <>
      <div className='divider-section2' id='sk'>
        <div className='divider1' ></div>
        <div className='divider-center'>
            <h2 className='skill-text'>SKILLS</h2>
        </div>
        <div className='divider2' ></div>
      </div>

      <div className="wrapper">
            <div className="skillImg" data-aos = 'zoom-in-up'>
               <img src={skillImg} alt="boy with laptop" /> 
            </div>
            <div className="prog-bar" data-aos = 'zoom-in-left'>
                <div className="pb-html">
                    <div className="skill-percent">
                        <p>HTML</p>
                        <p>90%</p>
                    </div>
                    <div className="back-bar"></div>
                    <div className="color-bar"></div>
                </div>
                <div className="pb-css">
                    <div className="skill-percent">
                        <p>CSS</p>
                        <p>80%</p>
                    </div>
                    <div className="back-bar"></div>
                    <div className="color-bar"></div>
                </div>
                <div className="pb-js">
                    <div className="skill-percent">
                        <p>JavaScript</p>
                        <p>70%</p>
                    </div>
                    <div className="back-bar"></div>
                    <div className="color-bar"></div>
                </div>
                <div className="pb-react">
                    <div className="skill-percent">
                        <p>React</p>
                        <p>70%</p>
                    </div>
                    <div className="back-bar"></div>
                    <div className="color-bar"></div>
                </div>
            </div>
        </div>

    </>
  )
}

export default Skill