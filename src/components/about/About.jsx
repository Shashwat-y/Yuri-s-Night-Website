import React, { useState, useEffect } from "react";
import "./About.scss"; // Import SCSS file for styling
import Navbar from "../navbar/Navbar";
import logo from './logo.png'

const about = () => {
  const [members, setMembers] = useState(0);
  const [events, setEvents] = useState(0);
  const [projects, setProjects] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const counterInterval = setInterval(() => {
      // Increment the counters with a slightly faster speed
      if (members < 25000) {
        setMembers((prevMembers) => prevMembers + 1000);
      }
      if (events < 20) {
        setEvents((prevEvents) => prevEvents + 1);
      }
      if (projects < 40) {
        setProjects((prevProjects) => prevProjects + 1);
      }
      if (years < 10) {
        setYears((prevYears) => prevYears + 1);
      }
    }, 100); // Adjust speed as needed

    return () => clearInterval(counterInterval);
  }, [members, events, projects, years]);

  return (
    <>
      <Navbar />
      <div className="about-page">
        <div className="about-content">
          <div className="left-content">
            <h2>About Yuri Night</h2>
            <p className="hi">
              Yuri's Night, an annual celebration commemorating Yuri Gagarin's
              historic journey into space, holds a special significance for The
              Astronomy Club IIT BHU (Varanasi). It serves as a beacon of
              inspiration, igniting curiosity and passion for astronomy among
              students and enthusiasts alike. Through engaging activities,
              workshops, and discussions, Yuri's Night offers a unique
              opportunity to explore the mysteries of the cosmos and connect
              with like-minded individuals.
            </p>
          </div>
          <div className="right-content">
            <img src={logo}></img>

          </div>
        </div>
        {/* <div className="timeline">
          <h2>TIMELINE</h2> */}
       
          
          {/* <div classNameName="line"></div> */}
          {/* <div classNameName="events"> */}
            {/* <div classNameName="event">
              <div classNameName="event-date">April 12, 2024</div>
              <div classNameName="event-description">
                Day 0
              </div>
            </div> */}
            {/* <div classNameName="event">
              <div classNameName="event-date">April 13, 2024</div>
              <div classNameName="event-description">
                Day 1
              </div>
            </div> */}
            {/* <div classNameName="event">
              <div classNameName="event-date">April 14, 2024</div>
              <div classNameName="event-description">
                Day 2
              </div>
            </div> */}
          {/* </div> */}
       
          <section className="whole">
  <div className="container py-5">
    <div className="main-timeline">
      <div className="timeline left">
        <div className="">
          <div className=" p-4">
            <h3 className="date-n">12th April 2024</h3>
            <p className="mb-0 date-n">Opening Ceremony
                                            </p>
          </div>
        </div>
      </div>
      <div className="timeline right">
        <div className="">
          <div className=" p-4">
            <h3 className="date-n">13th April 2024</h3>
            <p className="mb-0 date-n">Events/ Competitions
</p>
          </div>
        </div>
      </div>
      <div className="timeline left">
        <div className="">
          <div className=" p-4">
            <h3 className="date-n">13th April 2024</h3>
            <p className="mb-0 date-n">Observation Session
</p>
          </div>
        </div>
      </div>
      <div className="timeline right">
        <div className="">
          <div className=" p-4">
            <h3 className="date-n">14th April 2024</h3>
            <p className="mb-0 date-n">Events/ Competitions
</p>
          </div>
        </div>
      </div>
      <div className="timeline left">
        <div className="">
          <div className=" p-4">
            <h3 className="date-n">14th April 2024</h3>
            <p className="mb-0 date-n">Closing Ceremony</p>
          </div>
        </div>
      </div>
      
    </div>
  </div>
</section>
      
       
      

        
        <div className="additional-content">
          <h2>A Comprehensive Exploration</h2>
          <p>
            Yuri's Night encapsulates a comprehensive exploration of the cosmos,
            fusing together science, technology, and awe-inspiring wonder. </p> <p>This
              annual celebration pays homage to Yuri Gagarin's historic leap into
              space, serving as a beacon for humanity's collective curiosity and
              thirst for knowledge. From mesmerizing stargazing
              sessions that unveil distant galaxies to thought-provoking
              conversations on cutting-edge space research, Yuri's Night offers a
              multifaceted journey through the cosmos.
          </p>
        </div>
        {/* Statistics */}
        <div className="statistics">
          <h2>Statistics</h2>
          <div className="stat-boxes">
            <div className="stat-box">
              <div className="circle">{members}+</div>
              <p>FOOTFALLS</p>
            </div>
            <div className="stat-box">
              <div className="circle">{events}+</div>
              <p>National Events</p>
            </div>
            <div className="stat-box">
              <div className="circle">{projects}+</div>
              <p>Projects</p>
            </div>
            <div className="stat-box">
              <div className="circle">{years}+</div>
              <p>Years</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default about;
