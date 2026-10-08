import React from 'react'
import "./Call.css";

const Call = () => {
  return (
    <div>
      {/* <!-- CALL TO ACTION SECTION --> */}
      <section className="cta">
        <div className="cta-content">
          <h2>Ready To Start Your Learning Journey?</h2>
          <p>
            Join Us today and start learning practical digital skills that can
            transform your future.
          </p>
          <a href="#" className="cta-button">
            {" "}
            Get Started
          </a>
        </div>
      </section>
    </div>
  )
}

export default Call

