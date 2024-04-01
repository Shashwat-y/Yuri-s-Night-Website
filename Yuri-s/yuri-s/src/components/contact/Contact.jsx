import "./contact.scss";
import React from 'react'
import Illus from './illustration.jpg'
import logo from './logo.png'

const Contact = () => {
  return (
   <div className="n-main">
        <div className="n-container">
        <div className="n-contact-card">


               <div className="n-brand">
               <img src={logo} className="n-yuri-logo">
               </img>
                <div className="n-brand-title">
                <p className="n-name">YURI'S</p>
                <p className="n-name">NIGHT</p>
                </div>
               </div>
               <h2>Contact Us</h2>
               
                 <p>Indian Institute of Technology</p>
                 <p>(Banaras Hindu University)</p>
                 <p>Varanasi, India</p>
                 <p> PIN: 221005</p>

                 <h3>Mail us : astronomyclub.iitbhu@gmail.com</h3>
                 {/* <p>Call us : +91111111111</p> */}

                 <div className="n-social">
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
        <div className="n-illus">
             <img src={Illus} className="n-im">
                          
             </img>
        </div>
    </div> 
    <div className="n-copyright">
         <p className="n-copy">© 2024 Copyright: ASTRONOMY CLUB IITBHU </p>
         
    </div>
   </div>
  )
}

export default Contact



