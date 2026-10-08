import React from 'react'
import Header from "../Components/Header/Header";
import Hero from "../Components/Hero/Hero";
import About from "../Components/About/About";
import Testimony from "../Components/Testimony/Testimony";
import Call from "../Components/Call/Call";
import Footer from "../Components/Footer/Footer";

const LandingPage = () => {
  return (
    <div>
       <Header/>
      <Hero/>
      <About/>
      <Testimony/>
      <Call/>
      <Footer/>
    </div>
  )
}

export default LandingPage
