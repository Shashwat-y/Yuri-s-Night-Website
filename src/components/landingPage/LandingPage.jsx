import React, { useState, useEffect } from 'react';
import Countdown from 'react-countdown';
import './landingPage.scss';
import bgVideo from './bgVideo.mp4';
import logo from './logo.png';
import astro from './astro.png';
import sntc from './sntc.png';
import { Link } from 'react-router-dom';

const Landing = () => {
  const [endDate, setEndDate] = useState(new Date('2024-04-12T00:00:00'));

  const Completionist = () => <span>You are good to go!</span>;

  // Renderer callback with condition
  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a completed state
      return <Completionist />;
    } else {
      // Render a countdown
      return (
        <span>
          {days}d : {hours}h : {minutes}m : {seconds}s
        </span>
      );
    }
  };

  useEffect(() => {
    // Store the end date in local storage
    localStorage.setItem('endDate', endDate.toString());
  }, [endDate]);

  return (
    <div>
      <div className="n-container-l">
        <video autoPlay muted loop>
          <source src={bgVideo} />
        </video>
        <img src={astro} className="n-astro" alt="astro" />
        <img src={sntc} className="n-sntc" alt="sntc" />
        <div className="n-main-head">
          <img src={logo} className="n-yuri-logo" alt="yuri-logo" />
          <div className="n-title-main">
            <p className="n-title">YURI'S NIGHT </p>
          </div>
          <p className="n-tag">A norturnal celebration of darkness...</p>
        </div>
        <div className="n-timer-container">
          <Countdown date={endDate} renderer={renderer} />
          {/* <p className="n-details">
            <span>days :</span>
            <span>hours :</span>
            <span>min :</span>
            <span>sec</span>
          </p> */}
        </div>
        <div className="n-btn-container">
          <button className="n-cta">
            <Link to="/home">explore</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Landing;
