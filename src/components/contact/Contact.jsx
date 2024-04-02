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
                <h4 className="n-name">YURI'S</h4>
                <h4 className="n-name">NIGHT</h4>
                </div>
               </div>
               <h2>Contact Us</h2>
               
                 <h4>Indian Institute of Technology</h4>
                 <h4>(Banaras Hindu University)</h4>
                 <h4>Varanasi, India</h4>
                 <h4> PIN: 221005</h4>

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
         <h4 className="n-copy">© 2024 Copyright: ASTRONOMY CLUB IITBHU </h4>
         
    </div>
   </div>
  )
}

export default Contact



