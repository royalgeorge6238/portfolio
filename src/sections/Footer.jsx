import React from 'react'
import '../styles/footer.css'

function Footer() {
  return (
    <>
    
    <section className="contact" data-aos = 'fade-up' data-aos-duration="1000">
        <div className="sec-head" >
          <p className='contact-text'>CONTACT</p>
        </div>
        <hr data-aos = 'zoom-in' data-aos-duration="2000"/>
        <div className="contact-icons" >
          <a href="" target='_blank' >
            <i class="fa-brands fa-whatsapp whatsapp"></i>
          </a>
          <a href="" target='_blank'>
            <i class="fa-brands fa-github git"></i>
          </a>
          <a href="" target='_blank'>
            <i class="fa-brands fa-linkedin linkedin"></i>
          </a>
          <a href="" target='_blank'>
            <i class="fa-brands fa-instagram insta"></i>
          </a>
          <a href="mailto:" target='_blank'>
            <i class="fa-solid fa-envelope mail"></i>
          </a>
        </div>
      </section>
   
   
    </>
    


  )
}

export default Footer