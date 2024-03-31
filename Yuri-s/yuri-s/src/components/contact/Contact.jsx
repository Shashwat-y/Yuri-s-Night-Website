import "./contact.scss";
import React from 'react'
import Illus from './illustration.jpg'
import logo from './logo.png'

const Contact = () => {
  return (
   <div className="main">
        <div className="container">
        <div className="contact-card">


               <div className="brand">
               <img src={logo} className="yuri-logo">
               </img>
                <div className="brand-title">
                <p className="name">YURI'S</p>
                <p className="name">NIGHT</p>
                </div>
               </div>
               <h2>Contact Us</h2>
               
                 <p>Indian Institute of Technology</p>
                 <p>(Banaras Hindu University)</p>
                 <p>Varanasi, India</p>
                 <p> PIN: 221005</p>

                 <h3>Mail us : astronomyclub.iitbhu@gmail.com</h3>
                 {/* <p>Call us : +91111111111</p> */}

                 <div className="social">
          <a href="#">
            <img src="/facebook.png" alt="" />
          </a>
          <a href="#">
            <img src="/instagram.png" alt="" />
          </a>
          <a href="#">
            <img src="/youtube.png" alt="" />
          </a>
          <a href="#">
            <img src="/dribbble.png" alt="" />
          </a>
        </div>
               
        </div>
        <div className="illus">
             <img src={Illus} className="im">
                          
             </img>
        </div>
    </div> 
    <div className="copyright">
         <p className="copy">© 2024 Copyright: ASTRONOMY CLUB IITBHU </p>
         
    </div>
   </div>
  )
}

export default Contact



