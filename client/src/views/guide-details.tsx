import React from 'react';
import '../css/guide-details.css';

interface Guide {
  name: string;
  photo: string;
  details: string;
  rating: number;
  email: string;
}

interface GuideDetailsProps {
  guide: Guide;
}

const GuideDetails: React.FC<GuideDetailsProps> = ({ guide }) => {
  return (
    <div className="details-container">
      <div className="details-card">

        {/* Guide Photo */}
        <img src={guide.photo} alt={guide.name} />

        {/* Guide Name */}
        <h1>{guide.name}</h1>

        {/* Guide Details */}
        <p className="subtitle"><strong>About Me:</strong></p>
        <p>{guide.details}</p>

        {/* Rating */}
        <div className="rating">
          {Array.from({ length: guide.rating }).map((_, i) => (
            <span key={i}>⭐️</span>
          ))}
        </div>

        {/* Skills / Expertise */}
        <div className="skills">
          <div className="skill">
            <span>Local Knowledge</span>
            <div className="skill-bar">
              <div className="fill" style={{ width: '90%' }}></div>
            </div>
          </div>
          <div className="skill">
            <span>Communication</span>
            <div className="skill-bar">
              <div className="fill" style={{ width: '85%' }}></div>
            </div>
          </div>
          <div className="skill">
            <span>Tour Planning</span>
            <div className="skill-bar">
              <div className="fill" style={{ width: '80%' }}></div>
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <a href={`mailto:${guide.email}`} className="btn-contact">
          Contact Guide
        </a>

        {/* Social Links */}
        <div className="socials">
          <a href="#"><img src="/icons/facebook.svg" alt="Facebook" /></a>
          <a href="#"><img src="/icons/instagram.svg" alt="Instagram" /></a>
          <a href="#"><img src="/icons/twitter.svg" alt="Twitter" /></a>
          <a href={`mailto:${guide.email}`}><img src="/icons/email.svg" alt="Email" /></a>
        </div>

        {/* Back Button */}
        <a href="/tourguide" className="btn-back">
          ← Back to Tour Guides
        </a>

      </div>
    </div>
  );
};

export default GuideDetails;