import { Nav } from "react-bootstrap";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const Navbar = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
      const observer = new IntersectionObserver(
          (entries) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      setActiveSection(entry.target.id);
                  }
              });
          },
          { threshold: 0 } // Trigger when 50% of the section is visible
      );

      const sectionIds = ['about', 'event', 'guest', 'gallery','team','sponsor','contact']; // IDs of your sections
      sectionIds.forEach(id => {
          const section = document.getElementById(id);
          if (section) {
              observer.observe(section);
          }
      });

      return () => {
        sectionIds.forEach(id => {
            const section = document.getElementById(id);
            if (section) {
                observer.unobserve(section);
            }
        });
    };
}, []);



  return (
    <div className="navbar">
      {/* Sidebar */}
      <div className="sidebar">
      <Sidebar/>
      </div>
      <div className="wrapper">
        {/* <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Astronomy Club IIT BHU
        </motion.span> */}
         
         <div >
            {/* <NavLink to='/About' className={({isActive})=> isActive? "active":""}>About</NavLink>
            <NavLink to='/Events'>Events</NavLink>
            <NavLink to='/Guests'>Guests</NavLink>
            <NavLink to="/Gallery ">Gallery</NavLink>
            <NavLink to="/Team">Team</NavLink>
            <NavLink to="/Sponsors">Sponsors</NavLink>
            <NavLink to="/Contact">Contact Us</NavLink> */}
             <div className="nav-items">
            
                <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
                <a href="#event" className={activeSection === 'event' ? 'active' : ''}>Event</a>
                <a href="#guest" className={activeSection === 'guest' ? 'active' : ''}>Guest</a>
                <a href="#gallery" className={activeSection === 'gallery' ? 'active' : ''}>Gallery</a>
                <a href="#team" className={activeSection === 'team' ? 'active' : ''}>Team</a>
                <a href="#sponsor" className={activeSection === 'sponsor' ? 'active' : ''}>Sponsor</a>
                <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contact</a>
           
             </div>

         </div>





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
    </div>
  );
};

export default Navbar;
