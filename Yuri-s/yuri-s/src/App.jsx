import React from "react";
import { BrowserRouter,Routes,Route } from "react-router-dom";
import Home from "./home";
import LandingPage from './components/landingPage/LandingPage'
const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/" element={<LandingPage/>} />
      
    </Routes>

  
  </BrowserRouter>
    
  );
};

export default App;
