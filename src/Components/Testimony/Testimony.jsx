import React from 'react';
import "./Testimony.css";
import eagle from "../../assets/eagle.JPG";

const Testimony = () => {
  return (
    <div>
            {/* <!-- TESTIMONY --> */}
      <section id="testimonials">
        <h4>TESTIMONIALS</h4>
        <h2>What our students Says</h2>
        <div className="testimonials-container">
          <div className="card">
            <img
              src={eagle}
              alt="eagle"
            />
            <h3>Modester Onyema</h3>
            <p>
              This academy Completely Changed my career. i leant web development
              from the scratch to finish and got my first job
            </p>
          </div>
          <div className="card">
            <img
              src={eagle}
              alt="eagle"
            />
            <h3>Faith Adigun</h3>
            <p>
              After i learnt web design here i got a good paying foreign Job
            </p>{" "}
          </div>
          <div className="card">
            <img
              src={eagle}
              alt="eagle"
            />
            <h3>Micheal Chieki</h3>
            <p>
              After learning my programme here i had the oppotunity to meet with
              the president of the united state
            </p>{" "}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Testimony
