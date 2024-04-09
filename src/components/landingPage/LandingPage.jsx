import React from 'react'
import Countdown from 'react-countdown';
import './landingPage.scss'
import bgVideo from './bgVideo.mp4'
import logo from './logo.png'
import isro from './isro.png'
import iit from './iit.png'
import astro from './astro.png'
import sntc from './sntc.png'

import { Link } from "react-router-dom";




const landing = () => {

  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return <span>{hours}:{minutes}:{seconds}</span>;
    }
  };


  return (
    <div>
       <div className="n-container-l">
       
       <video autoPlay muted loop >
          <source src={bgVideo}  /> 
       </video>
         {/* <img src={isro} className='isro'></img> */}
         {/* <img src={iit} className='iit'></img> */}
         <img src={astro} className='n-astro'></img>
         <img src={sntc} className='n-sntc'></img>
           <div className='n-main-head'>
               <img src={logo} className='n-yuri-logo'></img>
               <div className='n-title-main'>
               <p className="n-title">YURI'S NIGHT </p>
               
               {/* <p className="title">NIGHT</p> */}
               </div>
               <p className='n-tag'>A norturnal celebration of darkness...</p>
           </div>
           
           <div className="n-timer-container">
               <Countdown date={Date.now() + 260000000}  />
               <p className="n-details"><span>days :</span><span>hours :</span><span>min :</span><span>sec</span></p>
           </div>
           <div className='n-btn-container'>
           <button className='n-cta'><Link to='/home' >explore</Link></button>
           </div>
       </div>
       
    </div>
  )
}

export default landing