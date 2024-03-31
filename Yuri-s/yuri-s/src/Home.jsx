

import Test from "./Test";
import "./app.scss";
import Contact from "./components/contact/Contact";
import Cursor from "./components/cursor/Cursor";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Parallax from "./components/parallax/Parallax";
import Portfolio from "./components/portfolio/Portfolio";
import Services from "./components/services/Services";
import Event from "./components/event/event";

const Home = () => {
  return (
   

    // <div>
    //   <Cursor />
    //   <section id="Homepage">
    //     <Navbar />
    //     <Hero />
    //   </section>
    //   <section id="Services">
    //     <Parallax type="services" />
    //   </section>
    //   <section>
    //     <Services />
    //   </section>
    //   <section id="Portfolio">
    //     <Parallax type="portfolio" />
    //   </section>
    //   <Portfolio />
    //   <section id="Contact">
    //     <Contact />
    //   </section>
    //   {/* Framer Motion Crash Course */}
    //   {/* <Test/>
    // <Test/> */}
    // </div>

  <div>
      <section id="Homepage">
         <Navbar />
         <Hero />
      </section>
      <section id="about">
         <Navbar />
         <Hero />
      </section>
      <section id="event">
           <Event />
      </section>
      <section id="guest">
         <Navbar />
         <Hero />
      </section>
      <section id="gallery">
         <Navbar />
         <Hero />
      </section>
      <section id="team">
         <Navbar />
         <Hero />
      </section>
      <section id="sponsor">
         <Navbar />
         <Hero />
      </section>
      <section id="contact">
          <Contact />
      </section>
     
  </div>
    
  );
};

export default Home;
