import React from 'react';
import '../css/about.css';

const About: React.FC = () => {
  return (
    <div>
      <header className="navbar">
        <div className="logo">TRAVEL<span>WORLD</span></div>
        <nav>
          <a href="/">Home</a>
          <a className="active" href="/about">About Us</a>
          <a href="/tourguide">Tour Guide</a>
          <a href="/contact">Contact</a>
          <a href="/login">Login</a>
          <a className="register-btn" href="/signup">Register</a>
        </nav>
      </header>

      <div className="about-header">
        <h1>About TravelWorld</h1>
        <p>Explore the world with trusted guides and unforgettable experiences.</p>
      </div>

      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2>Our Mission</h2>
            <p>Connect travelers with expert guides and create memorable journeys across the globe.</p>
            <h2>Our Vision</h2>
            <p>Be the most trusted travel platform offering personalized tours and sustainable tourism experiences.</p>
          </div>
          <div className="about-image">
            <img src="/images/img.jpg" alt="TravelWorld" />
          </div>
        </div>

        {/* Team Members */}
        <div className="team-section">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="/images/team1.jpg" alt="Team Member" />
              <h3>John Doe</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="/images/team2.jpg" alt="Team Member" />
              <h3>Jane Smith</h3>
              <p>Tour Manager</p>
            </div>
            <div className="team-member">
              <img src="/images/team3.jpg" alt="Team Member" />
              <h3>Mike Lee</h3>
              <p>Marketing Head</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="testimonials">
          <h2>What Our Travelers Say</h2>
          <div className="testimonial">"TravelWorld made my Europe trip unforgettable. The guides were excellent!" – Sarah K.</div>
          <div className="testimonial">"Amazing service and friendly tour guides. Highly recommended!" – David L.</div>
        </div>

        {/* Call to Action */}
        <div className="cta">
          <h2>Ready to Explore?</h2>
          <a href="/tourguide">Book Your Tour Guide Now</a>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-wrapper">
          <div className="footer-box">
            <h2 className="footer-logo">TRAVEL<span>WORLD</span></h2>
            <p>It's time to travel the world</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            <div className="footer-social">
              <a href="#">Y</a>
              <a href="#">T</a>
              <a href="#">F</a>
              <a href="#">I</a>
            </div>
          </div>

          <div className="footer-box">
            <h3>Discover</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Tours</li>
            </ul>
          </div>

          <div className="footer-box">
            <h3>Quick Links</h3>
            <ul>
              <li>Gallery</li>
              <li>Login</li>
              <li>Register</li>
            </ul>
          </div>

          <div className="footer-box">
            <h3>Contact</h3>
            <ul>
              <li>📍 Address : Lorem</li>
              <li>📧 Email : xyz@mail.com</li>
              <li>📞 Phone : 00022200222</li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          © 2026 TravelWorld. All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default About;