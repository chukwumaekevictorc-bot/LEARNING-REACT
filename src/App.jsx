import React from "react";

const App = () => {
  return (
    <div>
      {/* <!-- NAV BAR --> */}
      <header>
        <div className="nav-link">
          <a target="_blank" href="./HTML PROJECT/classwork.html">
            Home
          </a>
        </div>
        <div className="nav-link">
          <a href="./HTML PROJECT/index.html">About</a>
        </div>
        <div className="nav-link">
          <a href="">Contact us</a>
        </div>
        <div className="nav-link">
          <a href="">Services</a>
        </div>
      </header>

      {/* <!-- HERO SECTION --> */}
      <div className="hero-section">
        <div className="overlay">
          <div className="text">
            <h1>Welcome to my Web page</h1>
            <div>
              learn fullstack development, UI/UX, Graphics Design and so on
              <div>
                <button>Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ABOUT SECTION --> */}
      <section className="about">
        <div className="about-text">
          <h3>Meet The Owner</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Qui
            maiores aliquid laborum, recusandae tenetur aspernatur nulla commodi
            debitis fugit laudantium cumque libero consequatur ex expedita!
          </p>
          <button>Know More</button>
        </div>
        <div className="img">
          <img src="../../../justine.jpg" alt="pix" />
        </div>
      </section>
      {/* <!-- TESTIMONY --> */}
      <section id="testimonials">
        <h4>TESTIMONIALS</h4>
        <h2>What our students Says</h2>
        <div className="testimonials-container">
          <div className="card">
            <img
              src="../../../Pictures/Wallpapers/my wedding pictures/_DSC8524.jpg"
              alt="image"
            />
            <h3>Modester Onyema</h3>
            <p>
              This academy Completely Changed my career. i leant web development
              from the scratch to finish and got my first job
            </p>
          </div>
          <div className="card">
            <img
              src="../../../Pictures/Wallpapers/my wedding pictures/_DSC8524.jpg"
              alt="image"
            />
            <h3>Faith Adigun</h3>
            <p>
              After i learnt web design here i got a good paying foreign Job
            </p>{" "}
          </div>
          <div className="card">
            <img
              src="../../../Pictures/Wallpapers/my wedding pictures/_DSC8524.jpg"
              alt="image"
            />
            <h3>Micheal Chieki</h3>
            <p>
              After learning my programme here i had the oppotunity to meet with
              the president of the united state
            </p>{" "}
          </div>
        </div>
      </section>

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

      {/* <!-- FOOTER --> */}

      <footer className="footer">
        <div className="footer-container">
          {/* ABOUT */}

          <div className="footer-box">
            <h2>Our Digital Skills Academy</h2>

            <p>
              Empowering students with practical digital skills for a better
              future.
            </p>
          </div>

          {/* QUICK LINKS */}

          <div className="footer-box">
            <h3>Quick Links</h3>

            <a href="#">Home</a>

            <a href="#">About</a>

            <a href="#">Courses</a>

            <a href="#">Contact</a>
          </div>

          {/* <!-- CONTACT --> */}

          <div className="footer-box">
            <h3>Contact Us</h3>

            <p>Email: info@example.com</p>

            <p>Phone: +234 800 000 0000</p>

            <p>Owerri, Imo State</p>
          </div>
        </div>

        {/* <!-- COPYRIGHT --> */}

        <div className="copyright">
          <p>© 2026 Our Digital Skills Academy. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;