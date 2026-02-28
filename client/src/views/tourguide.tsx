import React from 'react';
import '../css/tourguide.css';

interface Guide {
  id: number | string;
  name: string;
  photo: string;
  description: string;
  rating: number;
}

interface TourGuideProps {
  guides: Guide[];
}

const TourGuide: React.FC<TourGuideProps> = ({ guides }) => {
  return (
    <div className="tourguide-page">
      <div className="tourguide-container">

        {/* Left side: Branding / Info */}
        <div className="tourguide-left">
          <div className="brand-content">
            <h1>Meet Our Tour Guides</h1>
            <p>Explore destinations with the experts who know them best.</p>
          </div>
        </div>

        {/* Right side: Tour Guide Cards */}
        <div className="tourguide-right">
          <div className="cards-container">
            {guides.map((guide) => (
              <div className="tour-card" key={guide.id}>
                <img src={guide.photo} alt={guide.name} />
                <h3>{guide.name}</h3>
                <p>{guide.description}</p>

                <div className="rating">
                  {Array.from({ length: guide.rating }).map((_, i) => (
                    <span key={i}>⭐️</span>
                  ))}
                </div>

                <a href={`/guide/${guide.id}`} className="btn-contact">
                  Details
                </a>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Footer */}
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
          © 2024 TravelWorld. All Rights Reserved
        </div>
      </footer>
    </div>
  );
};

export default TourGuide;