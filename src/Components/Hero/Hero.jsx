import React from 'react'
import "./Hero.css";
import {Link} from "react-router-dom"

const Hero = () => {
  return (
    <div>
       {/* <!-- HERO SECTION --> */}
      <div className="hero-section">
        <div className="overlay">
          <div className="text">
            <h1>Welcome to my Web page</h1>
            <div>
              learn fullstack development, UI/UX, Graphics Design and so on
              <div>
                <button><Link to="/Login" > Get Started</Link></button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
