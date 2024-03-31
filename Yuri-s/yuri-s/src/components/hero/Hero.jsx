import "./hero.scss";
import { motion } from "framer-motion";
import logo from './logo.png'
import hero from './hero2.png'

const textVariants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
  scrollButton: {
    opacity: 0,
    y: 10,
    transition: {
      duration: 2,
      repeat: Infinity,
    },
  },
};
const sliderVariants = {
  initial: {
    x: 0,
  },
  animate: {
    x: "-220%",
    transition: {
      repeat: Infinity,
      repeatType:"mirror",
      duration: 20,
    },
  },
};

const Hero = () => {
  return (
    <div className="hero">
      <div className="wrapper">
        
          {/* <motion.h2 variants={textVariants}>IIT BHU</motion.h2> */}
          <div className="hero-text">
            <img src={logo} className="yuri-logo">
            
            </img>

            
          
            <h1 className="yuri-title">YURI'S NIGHT</h1>
            <p className="title-tag">A nocturnal celebration of darkness</p>

            <img className="hero2" src={hero} /> 
          
          </div>
         
          
        
      </div>
     
      
    </div>
  );
};

export default Hero;
