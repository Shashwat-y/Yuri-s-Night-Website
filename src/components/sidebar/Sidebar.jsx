import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleButton from "./toggleButton/ToggleButton";

const variants = {
  open: {
    clipPath: "circle(1200px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};
const Sidebar = () => {
  const [activeSection, setActiveSection] = useState(null);

  const [open, setOpen] = useState(false);
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

    const sectionIds = ['about', 'event', 'guest', 'gallery', 'team', 'sponsor', 'contact']; // IDs of your sections
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
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg-n" variants={variants}>
        {/* <Links /> */}
        <div className="links">
          <a href="#about" className={activeSection === 'about' ? 'n-active' : ''}>About</a>
          <a href="#event" className={activeSection === 'event' ? 'n-active' : ''}>Event</a>
          <a href="#guest" className={activeSection === 'guest' ? 'n-active' : ''}>Guest</a>
          <a href="#gallery" className={activeSection === 'gallery' ? 'n-active' : ''}>Gallery</a>
          <a href="#team" className={activeSection === 'team' ? 'n-active' : ''}>Team</a>
          <a href="#sponsor" className={activeSection === 'sponsor' ? 'n-active' : ''}>Sponsor</a>
          <a href="#contact" className={activeSection === 'contact' ? 'n-active' : ''}>Contact</a>
        </div>

      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
